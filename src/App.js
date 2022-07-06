import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Login from "./components/login";

const App = () => (
 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>       
        <Route path="/Login" element={<Login />} />        
      </Routes>
    </BrowserRouter>
);

export default App;
