
import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Brand from './Components/brand/Brand';
import Header from './Containers/header/Header';
import WhatGPT3 from './Containers/whatGPT3/WhatGPT3';
import Features from './Containers/features/Features';
import Possibility from './Containers/possibility/Possibility';
import CTA from './Components/cta/CTA';



function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
     <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
    </div>
  );
}

export default App;
