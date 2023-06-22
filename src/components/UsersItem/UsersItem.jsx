import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFolowwing } from "../../redux/tweets/tweetsSlice";

function UsersItem() {
  const users = useSelector((state) => state.users);
  const following = useSelector((state) => state.following);

  const dispatch = useDispatch();

  const handleFollowBtn = (e) => {
    console.dir(e.target.parentElement.id);
    const id = e.target.parentElement.id;
    let followBtnText;

    switch (e.target.innerText) {
      case "FOLLOW":
        dispatch(addToFolowwing(id));
        break;
      case "FOLLOWING":
        e.target.innerText = "FOLLOW";
        break;

      default:
        e.target.innerText = "FOLLOW";
    }
  };

  return (
    <div>
      {users.map(({ tweets, followers, avatar, id }) => {
        return (
          <li key={id} id={id}>
            <img width={80} height={80} src={avatar} alt="user" />
            <p>{tweets} TWEETS</p>
            <p>{followers} FOLLOWERS</p>
            <button onClick={handleFollowBtn} type="button">
              FOLLOW
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default UsersItem;
