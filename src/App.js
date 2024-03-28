import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div id='home'>
        <Header />
      </div>
      <div id="services">
        <MainContent />
      </div>
      <div id='info'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
