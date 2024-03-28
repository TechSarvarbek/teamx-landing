import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../Main/MainContent';
import Footer from '../Footer/Footer';


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
