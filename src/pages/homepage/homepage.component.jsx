import React from "react";
import "./homepage.styles.scss";

const HomePage = ({ history }) => (
  <div className="homepage">
    <h1>
      Welcome to the{" "}
      <strong onClick={() => history.push("card")}>Miscellaneus</strong> App!
    </h1>
    <p>
      This page was created to hold all my practice projects and miscellaneus
      components.
    </p>
  </div>
);

export default HomePage;
