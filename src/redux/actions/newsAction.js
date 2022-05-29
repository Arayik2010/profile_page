import { postsApi } from "../../Api/api";
export const ADD_POSTS = "ADD_POSTS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ADD_FLAGING = "ADD_FLAGING";
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";

export const newsAction = (posts) => {
  const data = posts.map((post) => ({
    ...post,
    followed: false,
  }));
  return {
    type: "ADD_POSTS",
    payload: data,
  };
};

export const currentPageAction = (currentPage) => ({
  type: "CHANGE_PAGE",
  payload: currentPage,
});

export const flagingAction = (isFlaging) => {
  return {
    type: "ADD_FLAGING",
    payload: isFlaging,
  };
};
export const followingAction = (following) => {
  return {
    type: "FOLLOW",
    payload: following,
  };
};
export const unFollowingAction = (unFollowing) => {
  return {
    type: "UNFOLLOW",
    payload: unFollowing,
  };
};

export const newsActionThunk = (page, size) => {
  return (dispatch, getState) => {
    postsApi().then((res) => dispatch(newsAction(res.data)));
  };
};

export const pageActionThunk = (page, size) => {
  return (dispatch, getState) => {
    postsApi().then((res) => dispatch(currentPageAction(res.data)));
  };
};
