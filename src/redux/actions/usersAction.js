export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const ADD_USERS = "ADD_USERS";

export const followAction =(userId)=>{
    return {
        type:'FOLLOW',
        payload:userId
    }
}
export const unfollowAction = (userId) => {
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
};

export const addUsersAction =(users)=>{
  return {
      type:"ADD_USERS",
      payload:users
  }
}