import React, { FC } from 'react';

interface Props {
  active: string;
};

const NavigationDots: FC<Props> = ({ active }) : JSX.Element => {
  const items: string[] = ['home', 'story', 'about', 'work', 'skills', 'testimonials', 'contact'];

  return (
    <div className='app__navigation'>
      {
        items.map((item, index) => (
          <a 
            key={item + index}
            href={`#${item}`}
            className={active === item ? 'app__navigation-dot active' : 'app__navigation-dot' }
          />
        ))
      }
    </div>
  )
}

export default NavigationDots