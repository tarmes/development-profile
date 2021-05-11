import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
   margin: 0 0 10vh;
   position: relative;

   h6 {
      color: white;
   }
`

function Footer() {
   return (
      <Styles>
         <h6>2021 Copyright &copy; <strong>Trevor Armes</strong>. All Rights Reserved</h6>
      </Styles>
      
   )
};

export default Footer;