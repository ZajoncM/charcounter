import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
