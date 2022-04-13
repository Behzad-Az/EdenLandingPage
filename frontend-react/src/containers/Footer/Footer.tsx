import React, { FC, useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

interface Props {};

interface FormData {
  name: string;
  email: string;
  message: string;
};

interface SanityContactDocument {
  _type: 'contact';
  name: string;
  email: string;
  message: string;
};

const Footer: FC<Props> = () : JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name, email, message } = formData;

  const handleTextChangeInput = (event: React.FormEvent<HTMLInputElement>) : void => {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () : void => {
    setIsLoading(true);
    const sanityContact: SanityContactDocument = {
      _type: 'contact',
      name,
      email,
      message
    };
    client.create(sanityContact)
    .then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    })
    .catch(error => {
      setIsLoading(false);
      setIsFormSubmitted(false);
    });
  };

  const renderForm = () : JSX.Element => {
    return isFormSubmitted ?
    <div>
      <h3 className='head-text'>Thank you for getting in touch!</h3>
    </div>
    :
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input 
          className='p-text' 
          type='text' 
          name='name' 
          placeholder='Your name' 
          value={name} 
          onChange={handleTextChangeInput}
        />
      </div>
      <div className='app__flex'>
        <input 
          className='p-text' 
          type='email' 
          name='email' 
          placeholder='Your email' 
          value={email} 
          onChange={handleTextChangeInput}
        />
      </div>
      <div>
        <textarea
          className='p-text'
          placeholder='Your message'
          value={message}
          name='message'
          onChange={handleChangeTextArea}
        />
      </div>
      <button 
        type='button' 
        className='p-text' 
        disabled={isLoading}
        onClick={handleSubmit}
      >
        { isLoading ? 'Sending...' : 'Send Message' }
      </button>
    </div>
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:azampour.b@gmail.com' className='p-text'>azampour.b@gmail.com</a>
        </div> 
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (778) 837-6597' className='p-text'>+1 (778) 837-6597</a>
        </div> 
      </div>
      { renderForm() }
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);