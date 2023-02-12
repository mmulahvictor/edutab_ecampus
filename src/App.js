import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '././components/Home';
import Navbar from '././components/Navbar';
import BasicConcepts from '././components/BasicConcepts';
import AdvancedConcepts from '././components/AdvancedConcepts';
import Projects from '././components/Projects';

function App () {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/basic-concepts" element={ <BasicConcepts /> } />
          <Route path="/advanced-concepts" element={ <AdvancedConcepts /> } />
          <Route path="/projects" element={ <Projects /> } />
        </Routes>
    </div>
  );
}

export default App;