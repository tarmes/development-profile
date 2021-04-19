import React from 'react';
import styled from 'styled-components';
import * as VFX from 'react-vfx';

const Styles = styled.div`
   position: relative;
   border-color: white;
   height: 90vh;

   .cat-pic {
      position: absolute;
      margin-left: 3%;
   }
   
   .skills {
      font-size: 4.5rem;
      color: white;
   }
`

function About() {
   return (
      <Styles>
         <VFX.VFXProvider>
            <VFX.VFXSpan shader="pixelateTransition" className="skills">Skills</VFX.VFXSpan>
            <div className="cat-pic"> 
               <VFX.VFXImg id="cat-pic" src="cat.gif" alt="catGif" shader="rainbow"  />
            </div> 
         </VFX.VFXProvider>         
      </Styles>

   )
}

export default About;