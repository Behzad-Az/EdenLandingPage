import React, { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {};
interface Experince {
  startMonthYear: string;
  endMonthYear: string;
  name: string;
  company: string;
  description: string;
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
    const experiencesQuery = '*[_type == "workExperiences"]';
    const skillsQuery = '*[_type == "skills"]';
    Promise.all([
      client.fetch(experiencesQuery),
      client.fetch(skillsQuery)
    ])
    .then(data => {
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


        <motion.div className='app__skills-exp'>
          {
            experiences.map((experience, index) => (

              <motion.div
                key={index}
                className='app__skills-exp-item'
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.startMonthYear} to<br />{experience.endMonthYear}</p>
                </div>

                <motion.div 
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-exp-work'
                  data-tip
                  data-for={experience.name}
                >
                    <h4 className='bold-text'>{experience.name}</h4>
                    <p className='p-text'>{experience.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={experience.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {experience.description}
                  </ReactTooltip>

              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  );
};

// export default AppWrap(Skills, 'skills', '');
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills', 
  'app__whitebg'
);