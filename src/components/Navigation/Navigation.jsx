import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tweets" activeClassName="active-link">
            Tweets
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
