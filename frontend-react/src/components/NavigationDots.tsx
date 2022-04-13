import React, { FC } from 'react';

interface Props {
  active: string;
};

const NavigationDots: FC<Props> = ({ active }) : JSX.Element => {
  const items: string[] = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

  return (
    <div className='app__navigation'>
      {
        items.map((item, index) => (
          <a 
            key={item + index}
            href={`#${item}`}
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            className='app__navigation-dot'
          />
        ))
      }
    </div>
  )
}

export default NavigationDots