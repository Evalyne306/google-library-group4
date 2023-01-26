import React, { useState } from "react";
import  Login  from './components/Login/Login';
import  Signup  from './components/Login/Signup';


function MainLogin() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  return (
    <div className="Main">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}  />
      }
    </div>
  );
}

export default MainLogin;