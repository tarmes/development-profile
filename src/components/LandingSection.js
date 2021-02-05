import React from 'react';
import styled from 'styled-components';
import TsParticles from './TsParticles';
import Particles from 'react-tsparticles';


const Styles = styled.div`
   height: 90vh;
   position: relative;

   #tsparticles {
      width: 100%;
      z-index: -1;
      position: fixed !important;
      height: 100%;
   }

   .avatar-pic {
      border-radius: 15%;
      width: 15%;
   }
`;

function LandingSection() {
   return (
      <Styles>
         <div style={{position: 'absolute'}}>
            <Particles
               id="tsparticles"
               options={{
               
               background: {
                  color: {
                     value: "#0d47a1",
                  },
               },
               fpsLimit: 60,
               interactivity: {
               detectsOn: "canvas",
               events: {
                  onClick: {
                     enable: true,
                     mode: "push",
                  },
               onHover: {
                  enable: true,
                  mode: "repulse",
               },
               resize: true,
               },
               modes: {
                  bubble: {
                     distance: 400,
                     duration: 2,
                     opacity: 0.8,
                     size: 40,
                  },
                  push: {
                     quantity: 4,
                  },
                  repulse: {
                     distance: 200,
                     duration: 0.4,
                  },
               },
            },
            particles: {
               color: {
                  value: "#ffffff",
               },
               links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
               },
               collisions: {
                  enable: true,
               },
               move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
               },
               number: {
                  density: {
                     enable: true,
                     value_area: 800,
                  },
               value: 80,
               },
               opacity: {
                  value: 0.5,
               },
               shape: {
                  type: "circle",
               },
               size: {
                  random: true,
                  value: 5,
               },
            },
               detectRetina: true,
            }}
         />
         </div>
         <div className="landing-section-container">
            <img src="https://avatars.githubusercontent.com/u/5865915?s=400&u=5fc166e95a00b64d9e232cfeeb0deb529aa6c3f4&v=4" className="avatar-pic" alt='avatar' />
            <h1>hi, I'm Trevor Armes</h1>
            <p>I'm a Full Stack Developer</p>
         </div>
         </Styles>
   )
}

export default LandingSection;