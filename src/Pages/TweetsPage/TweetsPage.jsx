import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/tweets/tweetsOperations";
import UsersList from "../../components/UsersList/UsersList";
import BackBtn from "../../components/BackBtn/BackBtn";

function TweetsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(1, 3));
  }, [dispatch]);
  return (
    <div>
      <UsersList />
      <BackBtn />
    </div>
  );
}

export default TweetsPage;
