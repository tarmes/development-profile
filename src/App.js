import './App.css';
import LandingSection from './components/LandingSection';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="App">
         <div className='routes'>
            <Switch>
               <Route path='/' component={LandingSection} />
            </Switch>
         </div>
		</div>
	);
}

export default App;
