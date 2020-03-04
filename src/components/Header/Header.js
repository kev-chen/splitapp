import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div class="header-icon">
        <img src={require("../../assets/icon_60pt@3x.png")} alt="logo" />
      </div>
      <div class="header-info">
        <h1>Split</h1>
        <p>
          A beautiful app built to split <br />
          your expenses with friends
        </p>
      </div>
    </header>
  );
};

export default Header;
