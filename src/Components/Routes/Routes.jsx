import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import { Routes, Route } from "react-router";
import "../Main/main.scss";
import Users from "../Users/Users";
import News from "../News/News";
import Music from "../Musics/Music";
import Setings from "../Setings/Setings";

const RouterLink = () => {
  return (
    <div className="router">
      <Routes>
        <Route path="/" element={<Profile />}>
          <Route path="/profile/" element={<Profile />}>
            <Route path=":invoiceId" element={<Profile />} />
          </Route>
        </Route>
        <Route path="messages" element={<Dialogs />} />
        <Route path="users" element={<Users />} />
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="setings" element={<Setings/>} />
      </Routes>
    </div>
  );
};
export default RouterLink;
