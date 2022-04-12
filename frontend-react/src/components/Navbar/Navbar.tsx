import React, { FC, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

interface Props {};

const Navbar: FC<Props> = () : JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const items: string[] = ['home', 'about', 'work', 'skills', 'contact'];
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {
          items.map((item, index) => (
            <li key={index} className='app__flex p-text'>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setMenuIsOpen(true)} />
        {
          menuIsOpen && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setMenuIsOpen(false)} />
              <ul>
                {
                  items.map((item, index) => (
                    <li key={index} className='app__flex p-text'>
                      <a href={`#${item}`} onClick={() => setMenuIsOpen(false)}>{item}</a>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;