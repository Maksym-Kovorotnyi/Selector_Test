import React, { useState } from "react";
import css from "./Pagination.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/tweets/tweetsOperations";

const Pagination = () => {
  const [limit, setLimit] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers({ page: 1, limit }));
  }, [dispatch, limit]);

  const handleLimitChange = () => {
    setLimit(limit + 3);
  };

  return (
    <>
      {limit === 12 ? (
        ""
      ) : (
        <button className={css.btn} onClick={handleLimitChange}>
          Load more
        </button>
      )}
    </>
  );
};

export default Pagination;
