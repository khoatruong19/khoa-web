import './styles/index.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path ="/" >
              <Home/>
            </Route>
            <Route path ="/about">
              <About/>
            </Route>
            <Route path ="/todo">
              <Todo/>
            </Route>
          </Switch>
          <Footer/>
    </div>
    </Router>
  );
}

export default App;
