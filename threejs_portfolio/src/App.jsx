import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <HeroSection/>
    </main>
  );
};

export default App;