import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../logo.svg";

const Header = ({ history }) => (
  <div className="header">
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => history.push("/")}
      />
      <h1> Miscellaneus </h1>
      <div className="options">
        <Link to="/card" className="link">
          {" "}
          Card{" "}
        </Link>
        <Link to="/todolist" className="link">
          {" "}
          ToDo{" "}
        </Link>
      </div>
    </header>
  </div>
);

export default withRouter(Header);
