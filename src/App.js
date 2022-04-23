//ROUTERS
import { Routes, Route } from "react-router-dom";
//PAGES
import HomePage from "./Pages/HomePage";
import React from "react";
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
