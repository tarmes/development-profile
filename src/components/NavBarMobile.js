import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
   @media (min-width: 769px) {
      display: none
   }
`

function NavBarMobile() {
   return (
      <Styles>
         <div className='mobile-navbar-container'>
            <nav className='navbar navbar-light bg-light'>
               <a href="/" className="navbar-brand">
                  Armes Development
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                     <li className="nav-item">
                        <a class="nav-link js-scroll" href="#top">Home</a>
                     </li>
                     <li className="nav-item">
                        <a class="nav-link js-scroll" href="#about">About</a>
                     </li>
                     <li className="nav-item">
                        <a class="nav-link js-scroll" href="#contact">Contact</a>
                     </li>
                  </ul>
               </div>
               
            </nav>
         </div>
      </Styles>
      
   )
};

export default NavBarMobile;