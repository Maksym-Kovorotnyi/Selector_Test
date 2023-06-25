import React from "react";
import UsersItem from "../UsersItem/UsersItem";
import Pagination from "../Pagination/Pagination";

import css from "./UserList.module.css";

function UsersList() {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <UsersItem />
      </ul>
      <Pagination />
    </div>
  );
}

export default UsersList;
