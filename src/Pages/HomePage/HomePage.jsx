import React from "react";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.welcomeText}>
        Welcome dude, <NavLink to="/tweets">click here</NavLink> to see our
        users!
      </h1>
    </div>
  );
}

export default HomePage;
