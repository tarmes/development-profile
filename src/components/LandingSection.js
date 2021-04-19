import React from 'react';
import styled from 'styled-components';
import TsParticles from './TsParticles';
import TypistText from './TypistText'
import * as VFX from 'react-vfx';

const Styles = styled.div`
   height: 90vh;
   position: relative;
   margin: 20vh 0 0;

   .avatar-pic {
      border-radius: 15%;
      /* z-index: 2; */
      width: 20%;
      position: relative;
      margin: 0 auto;
   }

   h1 {
      position: relative;
      color: white;
      margin: 40px 0;
   }

   .cat-pic {
      position: absolute;
      top: 3vh;
      right: 15vh;
   }


`;

function LandingSection() {
   return (
      <Styles>
         <TsParticles />
         <div className="landing-section-container">
            <img src="https://avatars.githubusercontent.com/u/5865915?s=400&u=5fc166e95a00b64d9e232cfeeb0deb529aa6c3f4&v=4" className="avatar-pic" alt='avatar' />
            <h1>hi, I'm Trevor Armes.</h1>
            <TypistText />
            <VFX.VFXProvider>
            <div className="cat-pic">
               <VFX.VFXImg
                  id="cat-pic"
                  src="cat.gif"
                  alt="catGif"
                  shader="rainbow"
               />
            </div>
            </VFX.VFXProvider>

         </div>
      </Styles>
   )
}

export default LandingSection;