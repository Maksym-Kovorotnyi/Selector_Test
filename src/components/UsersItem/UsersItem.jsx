import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFollowwing,
  addUsersFollowers,
  removeFromFollowing,
  removeUsersFollowers,
} from "../../redux/tweets/tweetsSlice";
import { changeUser } from "../../redux/tweets/tweetsOperations";
import css from "./UserItem.module.css";

function UsersItem() {
  const following = useSelector((state) => state.following);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleFollowBtn = (e) => {
    const id = e.target.parentElement.id;
    if (following.includes(id)) {
      dispatch(removeFromFollowing(following.indexOf(id)));
      users.map((user) => {
        if (user.id === id) {
          dispatch(
            changeUser({
              id,
              updateInfo: { ...user, followers: user.followers - 1 },
            })
          );
        }
        return user;
      });
      dispatch(removeUsersFollowers(users.findIndex((user) => user.id === id)));
    } else {
      dispatch(addToFollowwing(id));
      dispatch(addUsersFollowers(users.findIndex((user) => user.id === id)));
      users.map((user) => {
        if (user.id === id) {
          dispatch(
            changeUser({
              id,
              updateInfo: { ...user, followers: user.followers + 1 },
            })
          );
        }
        return user;
      });
    }
  };

  return (
    <>
      {users.map(({ tweets, followers, avatar, id }) => {
        const isFollowing = following.includes(id);
        const followBtnText = isFollowing ? "FOLLOWING" : "FOLLOW";
        const formattedNumber = followers
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
          <li key={id} id={id} className={css.item}>
            <div className={css.line}>
              <img
                className={css.img}
                width={80}
                height={80}
                src={avatar}
                alt="user"
              />
            </div>

            <p className={`${css.itemText} ${css.tweets}`}>{tweets} TWEETS</p>
            <p className={`${css.itemText} ${css.followers}`}>
              {formattedNumber} FOLLOWERS
            </p>
            <button
              className={`${css.btn} ${isFollowing ? css.active : ""}`}
              onClick={handleFollowBtn}
              type="button"
            >
              {followBtnText}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default UsersItem;
