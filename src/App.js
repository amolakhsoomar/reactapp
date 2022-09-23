
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
 
function App() {
  return (
    <>
    <Navbar title="AD" aboutText="Home"/>
    <div className='container my-3'>
      <TextForm heading="my new form" />
      </div>
    {/* <Router>
    <Navbar title="AD" aboutText="Home"/>
    <div className='container my-3'>
      <Routes>
          <Route exact path="/" element={<TextForm heading="my new form" />} />
          <Route  path="/about" element={<About />} />
        </Routes>
    </div>
    </Router> */}
    </>
  );
}

export default App;
