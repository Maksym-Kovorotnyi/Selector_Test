import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
