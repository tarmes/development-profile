import React, { useState } from 'react';
import styled from 'styled-components';
import { 
   Nav, 
   Navbar,
   NavbarBrand, 
   NavbarToggler, 
   Collapse, 
   NavItem } from 'reactstrap';

const Styles = styled.div`
   @media (min-width: 769px) {
      display: none
   }

   .nav-link {
      text-align: center;
   }
`

function NavBarMobile() {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <Styles>
         <div className='mobile-navbar-container'>
            {/* <nav className='navbar navbar-light bg-light'>
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
            </nav> */}
            <Navbar color='light' light expand='md'>
               <NavbarBrand href='/'>Armes Development</NavbarBrand>
               <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                  <NavItem>
                     <a class="nav-link" href="#top">Home</a>
                  </NavItem>
                  <NavItem>
                     <a class="nav-link" href="#about">About</a>
                  </NavItem>
                  <NavItem>
                     <a class="nav-link" href="#contact">Contact</a>
                  </NavItem>
               </Nav>
               </Collapse>
            </Navbar>
         </div>
      </Styles>
      
   )
};

export default NavBarMobile;