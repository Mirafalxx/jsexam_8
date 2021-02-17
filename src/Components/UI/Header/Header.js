import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const actStyles = {
  fontWeight: "bold",
  color: "red",
  textDecoration: "none",
};
const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={actStyles}
            style={{ textDecoration: "none" }}
          >
            Quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-quote"
            exact
            activeStyle={actStyles}
            style={{ textDecoration: "none" }}
          >
            Add New Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
