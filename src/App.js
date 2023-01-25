// import logo from './logo.svg';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Bookshelf from './components/Bookshelf';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path='/bookshelf'>
          <Bookshelf/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
