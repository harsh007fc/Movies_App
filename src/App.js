import Movies from './Components/Movies'
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Nav/>
     {/* router k and nav k bahr */}
    <Switch>   
      {/* this method is not prefferable */}
      {/* in place of this we use exact keyword */}
   <Route path='/' exact component={Home}/>
   <Route path='/movies' exact component={Movies}/>
   <Route path='/about' exact component={About}/>
   </Switch>
   </Router>
  );
}

export default App;
