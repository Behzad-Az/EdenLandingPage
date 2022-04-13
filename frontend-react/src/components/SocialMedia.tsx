import React, { FC } from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

interface Props {};

const SocialMedia: FC<Props> = () : JSX.Element => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;