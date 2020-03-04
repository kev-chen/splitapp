import React from "react";
import Header from "./components/Header";
import DeviceRender from "./components/DeviceRender";
import AppDescription from "./components/AppDescription";
import StoreBadges from "./components/StoreBadges";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AppDescription />
      <StoreBadges />
      <DeviceRender />
      <Contact />
    </div>
  );
}

export default App;
