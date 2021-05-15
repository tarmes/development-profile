import React from 'react';
import styled from 'styled-components';
import { SkillBars } from 'react-skills';

const Styles = styled.div`
   position: relative;
   margin: 10vh 0 15vh;
   
   .skills {
      font-size: 3.5rem;
      color: black;
   }

   .about-container {
      background-color: white;
      width: 90%;
      padding: 4vh 0;
      margin: 0 auto;
      border-radius: 15px;
      opacity: .75;
      position: relative;
      z-index: 5;
   }

   .about-section {
      display: flex;
      flex-direction: row;
   }

   .skills-container {
      width: 45%;
      margin: 2% 2.5% 0;
   }

   .aboutMe-container {
      width: 45%;
      margin: 2% 2.5% 0;
      box-shadow: 0 0 4px 1px black;
      padding: 10px 20px;
   }

   @media (max-width: 768px) {
      .about-section {
         flex-direction: column-reverse;
      }

      .skills-container {
         width: 85%;
         margin: 2% auto 1%;
      }

      .aboutMe-container {
         width: 85%;
         margin: 5% auto 2%;
         padding: 10px 5px;
      }
   }

`

const skillsData = [
   {
      name: 'ReactJS',
      level: 100,
      color: 'blue',

   },
   {
      name: 'HTML',
      level: 90,
      color: 'green'
   },
   {
      name: 'CSS',
      level: 85,
      color: 'red'
   },
   {
      name: 'Redux',
      level: 95,
      color: 'purple'
   },
   {
      name: 'Node.js',
      level: 70,
      color: 'black'
   },
   {
      name: 'Express.js',
      level: 85,
      color: 'yellow'
   },
   {
      name: 'SQLite3',
      level: 50,
      color: 'teal'
   },
   {
      name: 'PostgreSQL',
      level: 45,
      color: 'magenta',
   },
   {
      name: 'Knex',
      level: 85,
      color: 'blue'
   },
   {
      name: 'Cypress',
      level: 65,
      color: 'pink'
   },
   {
      name: 'Jest',
      level: 70,
      color: 'aqua'
   },
   {
      name: 'Python',
      level: 80,
      color: 'green'
   },
   {
      name: 'JavaScript',
      level: 80,
      color: 'black'
   },
   {
      name: 'TypeScript',
      level: 75,
      color: 'blue'
   },
   {
      name: 'React-Native',
      level: 45,
      color: 'lightgreen'
   }
   
]

function About() {
   return (
     <Styles>
       {/* <VFX.VFXProvider> */}
         <div className="about-container" id='about'>
           {/* <VFX.VFXSpan shader="pixelateTransition" className="skills"> */}
           
             
           {/* </VFX.VFXSpan> */}
           <div className="about-section">
               <div className="skills-container">
               <h2 className='skills'>
                     Skills
                  </h2>
                  <SkillBars
                     skills={skillsData}
                     labelsWidth={120}
                     spacing={10}
                     barsHeight={24}
                  />
               </div>               
               <div className="aboutMe-container">
                  <h2>About Me</h2>                  
                  <p>Full-Stack Developer with a passion for taking ideas and bringing them to fruition. Software allows us to come up with solutions and create an application for them in the real world. To bring change and positivity to real lives. I am just thankful to have found this lane and the opportunity to have fun problem-solving while leaving the world better than what we found it.</p>
                  <p>There is so much to learn, an endless amount, which is perfect for a naturally curious mind. I got my firsts tastes of programming on my graphing calculator, Myspace, and World of Warcraft private servers. Who would have thought it would bring me here! After years of indecision and lack of access, I finally made the choice to join a boot camp. I've been lucky enough to get strong foundations in HTML, CSS, and JavaScript, had a ton of fun with ReactJs, and got to learn about and get proficient with building web servers using Node.js. This is only the beginning, I am eager to continue my journey in life and career. I’m here to help, I’m here to learn, I’m here to impress. Get in touch! </p>
               </div>
            </div>
         </div>
       {/* </VFX.VFXProvider> */}
     </Styles>
   );
}

export default About;