import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Gallery from './components/Gallery';
import Documents from './components/Documents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Gallery />
      <Documents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;