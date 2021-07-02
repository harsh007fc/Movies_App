import Movies from './Components/Movies'
import About from './Components/About';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Switch>   
      {/* this method is not prefferable */}
   <Route path='/movies' component={Movies}/>
   <Route path='/about' component={About}/>
   <Route path='/' component={Home}/>
   </Switch>
   </Router>
  );
}

export default App;
