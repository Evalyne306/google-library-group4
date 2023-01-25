// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Login } from './Login';
import { Signup } from './Signup';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}  />
      }
    </div>
  );
}

export default App;
