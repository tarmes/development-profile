import React from 'react';
import styled from 'styled-components';
import * as VFX from 'react-vfx';
import { SkillBars } from 'react-skills';

const Styles = styled.div`
   position: relative;
   border-color: white;
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
   }

   .skills-container {
      width: 45%;
      margin: 0 4vh;
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
            <div className="skills-container">
               <SkillBars skills={skillsData} labelsWidth={120} spacing={10} barsHeight={24} />
            </div>
          </div>
       </VFX.VFXProvider>
     </Styles>
   );
}

export default About;