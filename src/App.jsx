import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomePage  from "./pages/Home/index";
import ErrorPage from "./pages/Error";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>    
      </Routes>
    </Router>
  );
};
