import React, { useState } from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';
import { SocialIcon } from 'react-social-icons';

const Styles = styled.div`
   position: relative;
   margin: 10vh 0;
   background-color: #e3c2ea;
   border-radius: 10px;
   display: flex;
   padding: 5%;

   .contact-container {
      width: 40%;
      margin: auto;
   }

   .contact-info-container {
      width: 40%;
      margin: auto;
   }

   .contact-buttons {
      display: flex;
   }

   .socials {
      margin: 0 2%;
   }
`;

const initialContactFormValues = {
   name: "",
   company: "",
   email: "",
   subject: "",
   text: ""
};

function Contact() {

   const [contactFormValues, setContactFormValues] = useState(initialContactFormValues);
   
   const handleChange = e => {
      const { name, value } = e.target;
      setContactFormValues({ ...contactFormValues, [name]: value });
   }

   const handleSubmit = e => {
      e.preventDefault();
      const { name, company, email, subject, text } = contactFormValues;      
      let templateParams = {
         name: name,
         company: company,
         from_name: email,
         to_name: "traarmes@gmail.com",
         subject: subject,
         message_html: text
      };

      emailjs.send(
         'service_e2ik6ln',
         'template_dj13r8g',
         templateParams,
         'user_fB8QHaAnd4ECazpA9ukJP'
      );

      console.log("attempted send", templateParams);
      setContactFormValues(initialContactFormValues);
   }


   return (
      <Styles>
         <div className='contact-container'>
            <h2>Contact</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
               <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input 
                     type='text'
                     className='form-control'
                     id='name'
                     required
                     value={contactFormValues.name}
                     onChange={handleChange}
                     name="name"
                  />
               </div>

               <div className='form-group'>
                  <label htmlFor='company'>Company</label>
                  <input 
                     type='text'
                     className='form-control'
                     id='company'
                     value={contactFormValues.company}
                     onChange={handleChange}
                     name="company"
                  />
               </div>

               <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input 
                     type='email'
                     className='form-control'
                     id='email'
                     required
                     value={contactFormValues.email}
                     onChange={handleChange}
                     name="email"
                  />
               </div>

               <div className='form-group'>
                  <label htmlFor='subject'>Subject</label>
                  <input 
                     type='text'
                     className='form-control'
                     id='subject'
                     required
                     value={contactFormValues.subject}
                     onChange={handleChange}
                     name="subject"
                  />
               </div>

               <div className='form-group'>
                  <label htmlFor='text'>Text</label>
                  <input 
                     type='text'
                     className='form-control'
                     id='text'
                     value={contactFormValues.text}
                     onChange={handleChange}
                     name="text"
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  Submit
               </button>
            </form>
            

         </div>
         <div className='contact-info-container'>
            <h2>General Info</h2>
            <p>If you'd like to see some more of the developer, or more of the person, here you go!</p>
            <div className="contact-buttons">
                     <SocialIcon className='socials' url="https://www.linkedin.com/in/trevor-armes/" />
                     <SocialIcon className='socials' url="https://github.com/tarmes" />
            </div>
         </div>
      </Styles>
      
   )
};

export default Contact;