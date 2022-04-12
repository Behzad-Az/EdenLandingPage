import React, { FC } from 'react';
import { images } from '../../constants';
import './Navbar.scss';

interface Props {};

const Navbar: FC<Props> = () : JSX.Element => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt='logo' />
      </div>
    </nav>
  );
};

export default Navbar;