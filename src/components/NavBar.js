import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
   position: fixed;
   z-index: 9999;
   overflow: hidden;
   top: 0;
   width: 100%;

   .navbar-container {
      z-index: 9999;
   }

   .navbar {
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
      background-color: darkred;
      color: black;
      transition: all 1s ease;
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
                     {/* <Link to={"/"} className="nav-link js-scroll">
                        Home
                     </Link> */}
                     <a class="nav-link js-scroll" href="#top">Home</a>
                  </li>
                  <li className="nav-item">
                     {/* <Link to={"/about"} className="nav-link js-scroll">
                        About
                     </Link> */}
                     <a class="nav-link js-scroll" href="#about">About</a>
                  </li>
                  {/* <li className="nav-item">
                     <Link to={"/work"} className="nav-link">
                        Work
                     </Link>
                  </li> */}
                  <li className="nav-item">
                     {/* <Link to={"/contact"} className="nav-link js-scroll">
                        Contact
                     </Link> */}
                     <a class="nav-link js-scroll" href="#contact">Contact</a>
                  </li>
               </div>
            </nav>
         </div>
      </Styles>
      
   )
};

export default NavBar;