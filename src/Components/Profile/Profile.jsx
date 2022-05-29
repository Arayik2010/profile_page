import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyPosts from "./Posts/MyPosts/MyPosts";
import { profileAction } from "../../redux/actions/messageAction";
import { usersItems } from "../../redux/reducers/usersReducer";
import { useParams } from "react-router";

import "./profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.messages);
  const usersData = useSelector(usersItems);


  const { invoiceId } = useParams();
 

  useEffect(() => {
    const users = usersData.users;
    // console.log("userItem", users[invoiceId - 1]);
    const user = users[invoiceId - 1];
    dispatch(profileAction(user));
  }, [invoiceId]);

  return (
    <div className="profile">
      <div className="profImg">
        <img className="imageProf" src="https://stringfixer.com/files/288326783.jpg" alt="profile_photo" />
      </div>
      {profileData.profile && (
        <div>
          <img className="usersImg" src={profileData.profile.photoUrl} alt="profile_photo" />
          {profileData.profile.fullName}
        </div>
      )}
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
