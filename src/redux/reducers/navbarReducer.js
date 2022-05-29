import { CATEGORY_NAVICGATION } from "../actions/navbar";

const initialState = {
  category: [
    { name: "Profile", id: 0, path: "profile" },
    {
      name: "Messages",
      id: 1,
      path: "messages",
    },
    {
      name: "Users",
      id: 2,
      path: "users",
    },

    {
      name: "News",
      id: 3,
      path: "news",
    },
    {
      name: "Music",
      id: 4,
      path: "music",
    },
    {
      name: "Setings",
      id: 5,
      path: "setings",
    },
  ],
};

export const navbarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_NAVICGATION: {
      return {
        ...state,
        category: payload,
      };
    }
    default:
      return state;
  }
};

export const navbarCategory = (state) => {
  return state.categoryLink;
};
