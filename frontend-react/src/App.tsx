import React, { FC } from 'react';
import { About, Footer, Header, Skills, Testimonials, Work } from './containers';

interface Props {};

const App: FC<Props> = () : JSX.Element => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;