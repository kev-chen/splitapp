import React from "react";
import "./style.css";

const StoreBadges = props => {
  return (
    <div className="badge-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://apps.apple.com/us/app/split-simplify-your-hangouts/id1500703560"
      >
        <img
          className="app-store"
          src={require("../../assets/download-on-app-store.svg")}
          alt="App Store"
        />
      </a>
      <div className="divider" />
      <img
        className="play-store"
        src={require("../../assets/play_store.png")}
        alt="Play store"
      />
    </div>
  );
};

export default StoreBadges;
