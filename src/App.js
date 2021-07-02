import Movies from './Components/Movies'
import About from './Components/About';
import Home from './Components/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
   <Router>
   {/* <Home/> */}
   <Route path='/' component={Home}/>
   {/* <Movies/> */}
   <Route path='/movies' component={Movies}/>
   {/* <About/> */}
   <Route path='/about' component={About}/>
   </Router>
  );
}

export default App;
