import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navigationCat } from "../../redux/reducers/dialogCategoryReducer";
import DialogInfo from "./DialogIfo/DialogInfo";
import "./dialogs.scss";

const Dialogs = () => {
  const dialogCat = useSelector(navigationCat);

  const itemDialog = dialogCat.navigation.map((item) => (
    <li key={item.id}>
      <Link to={`${item.path}/`}>{item.name}</Link>
    </li>
  ));
  return (
    <div className="dialogs">
      <div className="dialogItem">{itemDialog}</div>
      <div className="dialogMessage">
        <DialogInfo />
      </div>
    </div>
  );
};
export default Dialogs;
