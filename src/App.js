import React, { useState } from "react";
import './App.css';
import  Login  from './Login/Login';
import  Signup  from './Login/Signup';

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