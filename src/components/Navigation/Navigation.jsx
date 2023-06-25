import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigatin.module.css";
function Navigation() {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/tweets">
            Tweets
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
