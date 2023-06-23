import React, { useEffect, useState } from "react";
import UsersItem from "../UsersItem/UsersItem";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/tweets/tweetsOperations";
import css from "./UserList.module.css";

function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const totalPages = 12 / 3;
  useEffect(() => {
    dispatch(getAllUsers({ page: currentPage }));
  }, [currentPage, dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className={css.list}>
        <UsersItem />
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default UsersList;
