import React from "react";
import './style.css';

const DeviceRender = props => {
  return (
    <img
      src={require("../../assets/device-promo.png")}
      className="device-render"
      alt="logo"
    />
  );
};

export default DeviceRender;
