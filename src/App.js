import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import TweetsPage from "./Pages/TweetsPage/TweetsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="tweets" element={<TweetsPage />}></Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
