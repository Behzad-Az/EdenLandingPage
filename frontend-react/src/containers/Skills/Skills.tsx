import React, { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {};
interface Experince {
  year: string;
  works: {
    name: string;
    company: string;
    desc: string;
  }[];
};
interface Skill {
  name: string;
  icon: SanityImageSource;
  bgColor: string;
};

const Skills: FC<Props> = () : JSX.Element => {
  const [experiences, setExperiences] = useState<Experince[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    Promise.all([
      client.fetch(experiencesQuery),
      client.fetch(skillsQuery)
    ])
    .then(data => {
      console.log("i'm here 0: ",data[0]);
      setExperiences(data[0]);
      setSkills(data[1]);
    })
    .catch(error => {
      console.error(error);
      setExperiences([]);
      setSkills([]);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {
            skills.map((skill, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon).toString()} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div className='app__experiences-list'>
          {
            experiences.map((experience, index) => (
              <div key={index}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__experiences-item'
                  data-tip
                  data-for={experience.works[0].name}
                >
                  <h4 className='bold-text'>{experience.works[0].name}</h4>
                  <p className='p-text'>{experience.works[0].company}</p>
                </motion.div>
                <ReactTooltip
                  id={experience.works[0].name}
                  effect='solid'
                  arrowColor='#fff'
                  className='experiences-tooltip'
                >
                  {experience.works[0].desc}
                </ReactTooltip>
              </div>
            ))
          }
        </motion.div>
      </div>
    </>
  );
};

export default Skills;