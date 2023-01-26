import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div>
        <NavLink className={"navbar"} to="/">
        Login
      </NavLink>
      <NavLink className={"navbar"} to="/home" >
        Home
      </NavLink>
      <NavLink className={"navbar"} to="/logout">
        LogOut
      </NavLink>
      {/* <NavLink className={"navbar"} to="/actors">
        Actors
      </NavLink> */}
  </div>
    )
}

export default Navbar