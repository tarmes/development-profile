import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
   position: absolute;

   h1 {
      position: absolute;
   }
`

function About() {
   return (
      <Styles>
         <h1>THIS IS THE ABOUT SECTION</h1>
      </Styles>

   )
}

export default About;