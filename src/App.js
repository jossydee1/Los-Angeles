import React from "react";
import "./App.css";
import Bottom from "./Components/Bottom";
import Middle from "./Components/Middle";
import Top from "./Components/Top";

function App() {
  return (
    <div className="app">
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
