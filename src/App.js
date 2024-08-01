import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/nav/Nav';
import Home from './Components/home/Home';
import About from './Components/about/About';

function App() {
  return (
   
      <div className="App">
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


        </Routes>
      </div>
    
  );
}

export default App;
