import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const { register, formState, handleSubmit, reset } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    const formData = data;
    console.log(formData);
    try {
      const res = await axios.post(
        'https://api.precisioninfotech.com/contact',
        formData
      );
      if (res.status == 200) {
        console.log(res);
        toast.success('Message Sent');
        reset();
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error(error);
      toast.error('An Error Occured');
    }
  };

  return (
    <section id='contact'>
      <Toaster />
      <h5>GEt In Touch</h5>
      <h2>Contact ME</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contact@lukeolawale.com</h5>
            <a href='mailto:contact@lukeolawale.com' target='blank'>
              Send Mail
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Luke Olawale</h5>
            <a href='https://linkedin.com/in/luke-olawale/' target='blank'>
              Send a DM
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2348093597883</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+2348093597883'
              target='blank'
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            id='name'
            {...register('name')}
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            id='email'
            {...register('email')}
            placeholder='Your Email'
            required
          />
          <textarea
            id='message'
            {...register('message')}
            rows='7'
            placeholder='Enter Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
