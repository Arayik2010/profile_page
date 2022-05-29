import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { navbarCategory } from "../../redux/reducers/navbarReducer";

const Navbar = () => {
  const categoryName = useSelector(navbarCategory);

  const itemNavBar = categoryName.category.map((item) => (
    <li key={item.id}>
      <Link to={`${item.path}`}>{item.name}</Link>
    </li>
  ));

  return (
    <div className="navbar">
      <div className="navItems">
        <ul className="category_item">{itemNavBar}</ul>
      </div>
    </div>
  );
};
export default Navbar;
