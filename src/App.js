import React from "react";
import "./App.css";
// import HomepageImage from "./components/HomepageImage";
// import AppIcon from "./components/AppIcon";
import Header from "./components/Header";
import DeviceRender from "./components/DeviceRender";
import AppDescription from "./components/AppDescription";
import StoreBadges from "./components/StoreBadges";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <AppDescription />
      <StoreBadges />
      <DeviceRender />
      <Contact />
    </div>




    // <div className="App">
    //   <header>
    //     <div class="header-icon">
    //       <AppIcon />
    //     </div>
    //     <div class="header-info">
    //       <h1>Apollo</h1>
    //       <p>A beautiful Reddit app <br />built for power and speed</p>
    //     </div>
    //   </header>
    //   <p class="intro-text">Apollo is built by a former Apple employee with feedback from thousands of Redditors to sculpt the best client possible. It features a beautiful, native iOS design, smooth, customizable gestures, fast loading pages, a supercharged Media Viewer experience, a powerful, full Markdown editor, a Jump Bar for lightning-fast navigation, and so much more. You have to see it to believe it.</p>
    // </div>

    //     <div className="App-title-container">
    //       <AppIcon />
    //       <div className="App-title-info-container">
    //         <h1 className="App-title">Split</h1>
    //         <h4 className="App-title-description">Split your expenses with ease</h4>
    //       </div>
    //     </div>
    //     <header className="App-header">
    //       <HomepageImage />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    // </div>
  );
}

export default App;
