import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newMessages } from "../../../../redux/reducers/messageReducer";
import { messageAction } from "../../../../redux/actions/messageAction";

import "./posts.scss";

const MyPosts = () => {
  const messagesText = useSelector(newMessages);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    return setText("");
  }, [messagesText]);

  let addMessages = {
    message: text,
    url: "https://img-9gag-fun.9cache.com/photo/aV0bR1n_460s.jpg",
    tipes: Math.floor(Math.random() * 10),
    id: messagesText.text.length + 1,
  };

  let messagesData = messagesText.text.map((item) => {
    return (
      <div key={Math.random()}>
        <div className="avatarBlock">
          <img className="avatarImg" src={item.url} alt={item.message} />
          <p>{item.message}</p>
        </div>
        <span>{item.tipes}</span>
      </div>
    );
  });

  return (
    <div>
      <div>My Posts</div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(messageAction(addMessages))}>Add</button>
      {messagesData}
    </div>
  );
};
export default MyPosts;

