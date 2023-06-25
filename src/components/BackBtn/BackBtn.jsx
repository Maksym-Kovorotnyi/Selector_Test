import React from "react";
import { Link } from "react-router-dom";
import css from "./BackBtn.module.css";
function BackBtn() {
  return (
    <>
      <Link className={css.backBtn} to="/">
        Back
      </Link>
    </>
  );
}

export default BackBtn;
