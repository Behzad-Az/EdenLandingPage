import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

interface Props {};

const Header: FC<Props> = () : JSX.Element => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  };

  const skillIcons = [images.flutter, images.redux, images.sass];

  return (
    <div className='app__header app__flex'>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-left'
      >

      </motion.div>
      
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-right'
      >
        <img src={images.edenLogoFullColourReverse} alt='profile_bg' />
        <h1 className='head-text'>Welcome to Eden</h1>
        <p className='p-text'>Ethical Rentals</p>
        <p className='p-text'>Extending livable life</p>
        <p className='p-text'>Invest in your community</p>
        <p className='p-text'>Invest in your community</p>        
      </motion.div>


      
      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>

          <div className='badge-cmp app__flex'>
            <span>👋🏼</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Welcome to Eden</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.edenLogoFullColourReverse} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {
          skillIcons.map((icon, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={icon} alt='skill-icon' />
            </div>
          ))
        }
        
      </motion.div> */}

    </div>
  );
};

export default AppWrap(Header, 'home', '');