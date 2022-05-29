import { ADD_MESSAGE, SET_USER_PROFILE } from "../actions/messageAction";

const initialState = {
  text: [
    {
      message: "hi,how are you",
      url: "https://img-9gag-fun.9cache.com/photo/aV0bR1n_460s.jpg",
      tipes: "like 3",
      id: 1,
    },
    {
      message: "it is my firs post",
      url: "https://img-9gag-fun.9cache.com/photo/aV0bR1n_460s.jpg",
      tipes: "like 5",
      id: 2,
    },
  ],
  profile: [],
};

export const newMessageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        text: state.text.concat(payload),
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: payload,
      };
    }
    default:
      return state;
  }
};

export const newMessages = (state)=>{
  return state.messages
}

