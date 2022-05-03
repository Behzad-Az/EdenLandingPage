import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Story.scss';

interface Props {};

const Story: FC<Props> = () : JSX.Element => {
  return (
    <>
      <h2 className='head-text'>
        Our Story
      </h2>
      <div className='content-container'>
        <p className='p-text'>
          Eden was born out of the <span className='app__bluetext bold-text'>frustration</span> that is <span className='app__bluetext bold-text'>Canadian real estate</span>. Like many average Canadians, Eden's founders, Milad and Ben, were systematically <span className='app__bluetext bold-text'>shut out</span> of the market while <span className='app__bluetext bold-text'>prices continued to rise</span>, and <span className='app__bluetext bold-text'>policy after policy failed</span> to remedy the situation.
        </p>
        <br />
        <p className='p-text'>
          In late 2021, inspired by John F. Kennedy's famous quote, Ben had an idea. <span className='app__bluetext bold-text'>Ask not what your country can do for you, ask what you can do for your country</span>. How do we, as average Canadians, <span className='app__bluetext bold-text'>take back control</span> of our real estate market, and <span className='app__bluetext bold-text'>prosper</span> at the same time?
        </p>
        <br />
        <p className='p-text'>
          And just like that, a few weeks later, <span className='app__bluetext bold-text'>Canada’s first crowdfunding platform for ethical real estate investing</span> was launched. Our mission is to harness the power of communal investing to address Canada's housing woes. Together, we can <span className='app__bluetext bold-text'>provide long-term rentals</span>, <span className='app__bluetext bold-text'>revitalize aging buildings</span>, and <span className='app__bluetext bold-text'>build new housing</span> faster and better than any government or wealthy developer can.
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Story, 'app__story'),
  'story', 
  'app__yellowbg'
);

