export const ADD_MESSAGE = "ADD_MESSAGE";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const messageAction = (text) => {
  return {
    type: ADD_MESSAGE,
    payload: text,
  };
};

export const profileAction = (profile) => {
  return {
    type: SET_USER_PROFILE,
    payload: profile,
  };
};
