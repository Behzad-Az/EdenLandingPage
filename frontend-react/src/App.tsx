import React, { FC } from 'react';
import { About, Footer, Header, Skills, Testimonials, Work, Story } from './containers';
import { Navbar } from './components';
import './App.scss';

interface Props {};

const App: FC<Props> = () : JSX.Element => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Story />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;