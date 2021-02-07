import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';

const Styles = styled.div`
   color: white;
   position: relative;



   span {
      font-size: 24px;
   }
`


function TypistText() {
   return (
      <Styles>
         <Typist id="typist">
            <Typist.Delay ms={1500} />
               <span>I am a Reac</span>
                  <Typist.Backspace count={4} delay={500} />
               <span>Front-En</span>
                  <Typist.Backspace count={8} delay={800} />
               <span>Front and Bac</span>
                  <Typist.Backspace count={13} delay={1000} />
               <span>Full Stack Developer</span>
         </Typist>
      </Styles>

   )
}

export default TypistText;