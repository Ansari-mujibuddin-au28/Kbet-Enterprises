import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Workspace from './components/Workspace';
import Leadership from './components/Leadership'; // new
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Workspace />
        <Leadership /> {/* new section */}
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;