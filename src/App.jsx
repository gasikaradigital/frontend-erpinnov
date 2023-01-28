import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomePage  from "./pages/Home/index";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>    
      </Routes>
    </Router>
  );
};
