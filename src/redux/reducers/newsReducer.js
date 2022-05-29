import { ADD_POSTS, CHANGE_PAGE, ADD_FLAGING, FOLLOW, UNFOLLOW } from "../actions/newsAction";

export const initialState = {
  posts: [],
  pageSize: 2,
  totalPageCount: 10,
  currentPage: 1,
  isFlaging: true,
  followed: false,
};

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case ADD_POSTS: {
      return {
        ...state,
        posts: payload,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case ADD_FLAGING: {
      return {
        ...state,
        isFlaging: payload,
      };
    }
    case FOLLOW: {
      return {
        ...state,
        followed: payload,
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        followed: payload,
      };
    }
    default:
      return state;
  }
};

export const newsPosts = (state) => {
  return state.newsItem;
};
