import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

   // const [isOpen, setIsOpen] = useState(false);

   // const toggle = () => {
   //    setIsOpen(!isOpen);
   // }

   return (
      <div className='navbar-container'>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
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
   )
};

export default NavBar;