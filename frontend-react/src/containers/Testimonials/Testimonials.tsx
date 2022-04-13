import React, { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {};

interface Testimonial {
  imgUrl: SanityImageSource;
  feedback: string;
  name: string;
  company: string;
};

interface Brand {
  imgUrl: SanityImageSource;
  name: string;
};

const Testimonials: FC<Props> = () : JSX.Element => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    Promise.all([
      client.fetch(testimonialsQuery),
      client.fetch(brandsQuery)
    ])
    .then(data => {
      setTestimonials(data[0]);
      setBrands(data[1]);
    })
    .catch(error => {
      console.error(error);
      setTestimonials([]);
      setBrands([]);
    });
  }, []);

  const renderTestimonial = () : JSX.Element => {
    if (testimonials.length < 1) return <></>;
    const { imgUrl, feedback, name, company } = testimonials[currentIndex];
    return (
      <>
        <div className='app__testimonial-item app__flex'>
          <img src={urlFor(imgUrl).toString()} alt='testimonial' />
          <div className='app__testimonial-content'>
            <p className='p-text'>{feedback}</p>
            <div>
              <h4 className='bold-text'>{name}</h4>
              <h5 className='p-text'>{company}</h5>
            </div>
          </div>
        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className='app__flex' onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      { renderTestimonial() }
      <div className='app__testimonial-brands app__flex'>
        {
          brands.map((brand, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1 ] }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <img src={urlFor(brand.imgUrl).toString()} alt={brand.name} />
            </motion.div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonials', 
  'app__primarybg'
);