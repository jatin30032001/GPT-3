
import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Brand from './Components/brand/Brand';
import Header from './Containers/header/Header';
import WhatGPT3 from './Containers/whatGPT3/WhatGPT3';



function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
     <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
    </div>
  );
}

export default App;
