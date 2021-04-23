import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
   position: fixed;
   z-index: 9999;
   overflow: hidden;
   top: 0;
   width: 100%;


`

function NavBar() {

   // const [isOpen, setIsOpen] = useState(false);

   // const toggle = () => {
   //    setIsOpen(!isOpen);
   // }

   const [isScrolling, setScrolling] = useState(false)

   const changeNavBarColor = () => {
      if (window.scrollY >= 80) {
         setScrolling(true)
      } else {
         setScrolling(false)
      }
   }

   window.addEventListener('scroll', changeNavBarColor)

   return (
      <Styles>
         <div className='navbar-container'>
            <nav  className={isScrolling ? 'navbar navbar-expand navbar-dark bg-dark' : 'navbar navbar-expand navbar-dark bg-transparent'}>
               <a href="/" className="navbar-brand">
                  Armes Development
               </a>
               <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link to={"/"} className="nav-link">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to={"/about"} className="nav-link">
                        About
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to={"/work"} className="nav-link">
                        Work
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to={"/contact"} className="nav-link">
                        Contact
                     </Link>
                  </li>
               </div>
            </nav>
         </div>
      </Styles>
      
   )
};

export default NavBar;