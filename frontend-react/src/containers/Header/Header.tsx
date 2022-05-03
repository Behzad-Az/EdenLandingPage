import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

interface Props {};

const Header: FC<Props> = () : JSX.Element => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header'
    >
      <div className='app__header-left app__bluebg' />

      <div className='app__header-right app__bluebg'>
        <div className='app__header-logo-container'>
          <img src={images.edenLogoWhite} alt='logo' />
        </div>
        <div className='app__header-text-container'>
          <h1 className='head-text app__whitetext'>Welcome to Eden</h1>
          <p className='p-text app__whitetext'>ethical real estate investing for all</p>
          <p className='p-text app__whitetext'>equal barriers</p>
          <p className='p-text app__whitetext'>no hassle</p>          
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(Header, 'home', '');