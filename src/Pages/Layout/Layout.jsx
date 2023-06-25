import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

function Layout() {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
