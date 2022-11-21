import React from 'react';
import './App.css';
import AudioComponent from './components/AudioComponent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Hero />
      <AudioComponent />
    </div>
  );
}

export default App;
