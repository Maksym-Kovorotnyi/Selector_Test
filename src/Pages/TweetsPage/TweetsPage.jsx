import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/tweets/tweetsOperations";
import UsersList from "../../components/UsersList/UsersList";

function TweetsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <UsersList />
    </div>
  );
}

export default TweetsPage;
