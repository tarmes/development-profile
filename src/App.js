import './App.css';
import LandingSection from './components/LandingSection';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App">
         <NavBar />
         <div className='routes'>
            <Switch>
               <Route path='/' component={LandingSection} />
            </Switch>
         </div>
		</div>
	);
}

export default App;
