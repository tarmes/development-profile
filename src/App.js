import './App.css';
import LandingSection from './components/LandingSection';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App">
         {/* <div class="Frame" style={{borderColor: rgb(0, 153, 255) }}></div> */}
         <NavBar />
         {/* <div className='routes'>
            <Switch>
               <Route path='/' component={LandingSection} />
               <Route path='/' component={About} />
               <Route path='/' component={Contact} />
            </Switch>
         </div> */}
         <LandingSection />
         <About />
         <Contact />
         <Footer />
		</div>
	);
}

export default App;
