import React, {
  useState,
  useEffect,
  FC 
} from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

interface Props {};
interface About {
  title: string;
  description: string;
  imgUrl: string;
};

const About: FC<Props> = () : JSX.Element => {
  const [abouts, setAbouts] = useState<About[]>([]);

  const fetchFromSanity = async() => {
    const query = '*[_type == "abouts"]';
    const data: About[] = await client.fetch(query);
    setAbouts(data);
  };

  useEffect(() => {
    fetchFromSanity();
  }, [])
  
  return (
    <div>
      <h2 className='head-text'>
        I Know That <span>Good Design</span><br />means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              key={about.title + index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
            >
              <img src={urlFor(about.imgUrl).toString()} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
              <h2 className='p-text' style={{ marginTop: 10}}>{about.description}</h2>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default AppWrap(About, 'about', '');