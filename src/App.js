import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Footer} from "./containers";
import "./App.css";
import Body from "./components/Body";
import SubBody from "./components/SubBody";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Body />
        <SubBody />
        <Footer />
      </div>
    </div>
  );
};

export default App;
