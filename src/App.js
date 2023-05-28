import React from 'react';
import './App.css';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home isAdmin={false} />} />
          <Route path="/home-admin" element={<Home isAdmin={true} />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
