import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';

const Styles = styled.div`
   color: white;
   position: relative;

   span {
      font-size: 24px;
   }

`;


function TypistText() {
   return (
      <Styles>
         <Typist id="typist" avgTypingDelay={100} hideWhenDone={true} >
            <Typist.Delay ms={1500} />
               <span>I am a Reac</span>
                  <Typist.Backspace count={4} delay={500} />
               <span>Front-En</span>
                  <Typist.Backspace count={7} delay={800} />
               <span>ull Stack Developer.</span>
         </Typist>
      </Styles>
   )
}

export default TypistText;