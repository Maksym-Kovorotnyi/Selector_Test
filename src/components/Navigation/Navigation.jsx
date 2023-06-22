import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tweets">Tweets</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
