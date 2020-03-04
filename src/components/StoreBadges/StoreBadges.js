import React from "react";
import "./style.css";

const StoreBadges = props => {
  return (
    <div className="badge-container">
      <img className="app-store" src={require("../../assets/app_store.png")} alt="App Store" />
      <div className="divider" />
      <img className="play-store" src={require("../../assets/play_store.png")} alt="Play store" />
    </div>
  );
};

export default StoreBadges;
