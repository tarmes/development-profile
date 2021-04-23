import React from 'react';
import styled from 'styled-components';
import * as VFX from 'react-vfx';
import { SkillBars } from 'react-skills';

const Styles = styled.div`
   position: relative;
   height: 90vh;
   
   .skills {
      font-size: 4rem;
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
      border: 1px solid black;
      margin: 2% 2.5% 0;
   }

   .aboutMe-container {
      border: 1px solid red;
      width: 45%;
      margin: 2% 2.5% 0;
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
   
]

function About() {
   return (
     <Styles>
       <VFX.VFXProvider>
         <div className="about-container">
           <VFX.VFXSpan shader="pixelateTransition" className="skills">
             Skills
           </VFX.VFXSpan>
           <div className="about-section">
               <div className="skills-container">
                  <SkillBars
                     skills={skillsData}
                     labelsWidth={120}
                     spacing={10}
                     barsHeight={24}
                  />
               </div>               
               <div className="aboutMe-container">
                  <h2>About Me</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
               </div>
            </div>
         </div>
       </VFX.VFXProvider>
     </Styles>
   );
}

export default About;