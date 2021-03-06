import React, { useState } from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';
import { SocialIcon } from 'react-social-icons';
import * as VFX from 'react-vfx';
import schema from '../validation/formSchema';
import * as yup from 'yup';

const Styles = styled.div`
   position: relative;
   margin: 10vh 0;
   background-color: #e3c2ea;
   border-radius: 10px;
   display: flex;
   padding: 5%;

   .contact-container {
      display: flex;
      align-content: space-between;
      width: 100%;
   }

   .pixelated {
      font-size: 2.6em;
      color: #380056;
   }

   .form-control {
      margin: 5% 0;
   }

   button {
      background-color: #380056;
      border: 1px solid #380056;
   }

   .contact-form-container {
      width: 45%;
      margin: auto;
   }

   .contact-info-container {
      width: 45%;
      margin: 0 auto;
   }

   .contact-buttons {
      display: flex;
   }

   .socials {
      margin: 0 2%;
   }

   .errors {
      color: #f74545;
      margin-top: 3%;
   }

   .non-vfx {
      display: none;
   }

   @media (max-width: 768px) {
      .vfx {
         display: none;
      }

      .non-vfx {
         display: inline;
      }

      p {
         margin: 8% 0;
      }

      .contact-info-container {
         padding: 6%;
      }
   } 

   @media (max-width: 480px) {

      .contact-container {
         flex-direction: column;
      }
      
      .contact-info-container {
         width: 85%;
         margin: 2vh auto;
      }

      .contact-form-container {
         width: 85%;
      }
   }

   
`;

const initialContactFormValues = {
   name: "",
   company: "",
   email: "",
   subject: "",
   text: ""
};

const initialContactFormErrors = {
   name: "",
   email: "",
   subject: ""
}

function Contact() {

   const [contactFormValues, setContactFormValues] = useState(initialContactFormValues);
   const [contactFormErrors, setContactFormErrors] = useState(initialContactFormErrors);
   
   const handleChange = e => {
      const { name, value } = e.target;
      validateContactForm(name, value)
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

   const validateContactForm = (name, value) => {
      yup
         .reach(schema, name)
         .validate(value)
         .then(valid => {
            setContactFormErrors({
               ...contactFormErrors,
               [name]: ""
            })
         })
         .catch(err => {
            setContactFormErrors({
               ...contactFormErrors,
               [name]: err.errors[0]
            })
         })
   }


   return (
      <Styles>
         <VFX.VFXProvider>
         <div className='contact-container' id='contact'>

            <div className='contact-form-container'>
               <VFX.VFXSpan shader="spring" className="pixelated vfx">
                  Contact
               </VFX.VFXSpan>
               <h2 className='non-vfx'>Contact</h2>
               <form id="contact-form" onSubmit={handleSubmit}>
                  <div className='form-group'>
                     {/* <label htmlFor='name'>Name</label> */}
                     <input 
                        type='text'
                        className='form-control'
                        id='name'
                        required
                        value={contactFormValues.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="Your Name"
                     />
                  </div>

                  <div className='form-group'>
                     <input 
                        type='text'
                        className='form-control'
                        id='company'
                        value={contactFormValues.company}
                        onChange={handleChange}
                        name="company"
                        placeholder="Company"
                     />
                  </div>

                  <div className='form-group'>
                     <input 
                        type='email'
                        className='form-control'
                        id='email'
                        required
                        value={contactFormValues.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Email"
                     />
                  </div>

                  <div className='form-group'>
                     <input 
                        type='text'
                        className='form-control'
                        id='subject'
                        required
                        value={contactFormValues.subject}
                        onChange={handleChange}
                        name="subject"
                        placeholder="Subject"
                     />
                  </div>


                  <div className='form-group'>
                     <input 
                        type='text'
                        className='form-control'
                        id='text'
                        value={contactFormValues.text}
                        onChange={handleChange}
                        name="text"
                        placeholder="Send Trevor a message!"
                     />
                  </div>

                  <button type="submit" className="btn btn-primary">
                     Submit
                  </button>

                  <div className='errors'>
                     <div>{contactFormErrors.name}</div>
                     <div>{contactFormErrors.email}</div>
                     <div>{contactFormErrors.subject}</div>
                  </div>
               </form>
            </div>
            
            

         
         <div className='contact-info-container'>
            <VFX.VFXSpan shader="warpTransition" className="pixelated vfx">
               Explore
            </VFX.VFXSpan>
            <h2 className='non-vfx'>Explore</h2>
            <p>If you'd like to see some more of the developer, or more of the person, here you go!</p>
            <div className="contact-buttons">
                     <SocialIcon className='socials' url="https://www.linkedin.com/in/trevor-armes/" />
                     <SocialIcon className='socials' url="https://github.com/tarmes" />
            </div>
         </div>
         </div>
         </VFX.VFXProvider>
      </Styles>
      
   )
};

export default Contact;