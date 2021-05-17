import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBarMobile from './NavBarMobile';

const Styles = styled.div`
   position: fixed;
   z-index: 9999;
   overflow: hidden;
   top: 0;
   width: 100%;

   .navbar-container {
      z-index: 9999;
   }

   .brand-display {
      display: none;
   }

   .navbar-nav {
      justify-content: center !important;
   }

   .pre-transition {
      width: 100%;
      transition: all 2s ease-out;
   }

   .post-transition {
      width: 35%;
      margin: 0 auto;
      background-color: #380056;
      transition: all 1s ease;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
   }

   .nav-link {
      color: black;
   }

   @media (max-width: 768px) {
      .pre-transition {
         display: none;
      }

      .post-transition {
         display: none;
      }
   }

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
            <nav  className={isScrolling ? 'navbar navbar-expand navbar-dark post-transition' : 'navbar navbar-expand navbar-dark bg-transparent pre-transition'}>
               <a href="/" className={isScrolling ? "navbar-brand brand-display" : "navbar-brand"}>
                  Armes Development
               </a>
               <div className={isScrolling ? "navbar-nav mx-auto" : "navbar-nav ml-auto"}>
                  <li className="nav-item">
                     <a class="nav-link js-scroll" href="#top">Home</a>
                  </li>
                  <li className="nav-item">
                     <a class="nav-link js-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                     <a class="nav-link js-scroll" href="#contact">Contact</a>
                  </li>
               </div>
            </nav>
            <NavBarMobile />
         </div>
      </Styles>
      
   )
};

export default NavBar;