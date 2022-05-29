import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  flagingAction,
  newsActionThunk,
  pageActionThunk,
  followingAction,
  unFollowingAction,
} from "../../redux/actions/newsAction";
import { newsPosts } from "../../redux/reducers/newsReducer";
import "./news.scss";


const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(newsPosts);

  let currentPage = news.currentPage;
  let pageSize = news.pageSize;
  let isFlaging = news.isFlaging;
  let pageCount = Math.ceil(news.totalPageCount / pageSize);
   

  useEffect(() => {
    dispatch(newsActionThunk(currentPage, pageSize));
  }, []);

  let pagesCountClick = (e) => {
    dispatch(pageActionThunk(e));
  };

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  useEffect(() => {
    news && dispatch(flagingAction(false));
  }, []);

  return (
    <div>
      {isFlaging ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
      ) : null}

      {pages.map((e, index) => {
        return (
          <span key={index} className={news.currentPage === e ? "selectedPage" : ""} onClick={() => pagesCountClick(e)}>
            {e}
          </span>
        );
      })}

      {news.posts.map((e) => (
        <div key={e.id}>
          <h1>{e.name}</h1>
          <p>{e.username}</p>
          <span>{e.email}</span>
          {news.followed ? (
            <button onClick={() => dispatch(unFollowingAction(false))}>Unfoollow</button>
          ) : (
            <button onClick={() => dispatch(followingAction(true))}>Foollow</button>
          )}
        </div>
      ))}
    </div>
  );
};
export default News;
