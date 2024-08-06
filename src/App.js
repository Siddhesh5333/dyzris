import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './Components/Slider.js'
import Content from './Components/Content.jsx'
import AboutUs from './Components/Aboutus.jsx';
import Navbar from './Components/Navbar.js';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Footer from './Components/Footer.jsx';
import Help from './Components/Help.jsx';
function App() {
  return (

    <div className="App">
          <Router>
    <ScrollToTop />
  </Router>
  <Navbar/>
      <Slider/>
      <Content/>
      <AboutUs/>
      <Footer/>

    </div>
  );
}

export default App;
