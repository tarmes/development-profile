import './App.css';
import LandingSection from './components/LandingSection';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
   #content {
      overflow-y: scroll;
   }
`


function App() {
	return (
		<div className="App">
         {/* <div class="Frame" style={{borderColor: rgb(0, 153, 255) }}></div> */}
         <NavBar />
         <Styles>
         <div id='content'>
               {/* <Route path='/' component={LandingSection} />
               <Route path={['/', '/about']} component={About} />
               <Route path={['/', '/contact']} component={Contact} /> */}
               <LandingSection />
               <About />
               <Contact />
         </div>
         </Styles>


         <Footer />
		</div>
	);
}

export default App;
