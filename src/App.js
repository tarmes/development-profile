import './App.css';
import LandingSection from './components/LandingSection';
import NavBar from './components/NavBar';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App">
         {/* <div class="Frame" style={{borderColor: rgb(0, 153, 255) }}></div> */}
         <NavBar />
         <div className='routes'>
            <Switch>
               <Route path='/' component={LandingSection} />
               <Route path='/' component={About} />
            </Switch>
         </div>
         <About />
		</div>
	);
}

export default App;
