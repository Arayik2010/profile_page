import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unfollowAction, followAction } from "../../redux/actions/usersAction";
import { Link } from "react-router-dom";
import { usersItems } from "../../redux/reducers/usersReducer";
import "./users.scss";

const Users = () => {
  const usersData = useSelector(usersItems);

  let dispatch = useDispatch();

  let usersDataBlock = usersData.users.map((item) => {
    return (
      <div className="users" key={item.id}>
        <span>
          <div>
            <Link to={`/profile/${item.id}`}>
              <img className="usersImg" src={item.photoUrl} alt={item.name} />
            </Link>
          </div>
          <div>
            {item.followed ? (
              <button onClick={() => dispatch(unfollowAction(item.id))}>Unfollow</button>
            ) : (
              <button onClick={() => dispatch(followAction(item.id))}>Follow</button>
            )}
          </div>
        </span>
        <span>
          <div>{item.fullName}</div>
          <div>{item.status}</div>
        </span>
        <span>
          <div>{item.location.country}</div>
          <div>{item.location.city}</div>
        </span>
      </div>
    );
  });

  return <div>{usersDataBlock}</div>;
};
export default Users;
