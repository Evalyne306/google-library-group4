import { useState, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Bookshelf from './components/Bookshelf';
import Navbar from './components/Navbar';
import './App.css';
import  Login  from './components/Login/Login';
import  Signup  from './components/Login/Signup';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

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
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}  />
      }
    </div>
  );
}

export default App;