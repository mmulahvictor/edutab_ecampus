import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BasicConcepts from "./components/BasicConcepts";
import AdvancedConcepts from "./components/AdvancedConcepts";
import Projects from "./components/Projects";
import { useLocation } from 'react-router-dom';

function App () {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      { location.pathname === '/' && <Home /> }
      { location.pathname === '/basic-concepts' && <BasicConcepts /> }
      { location.pathname === '/advanced-concepts' && <AdvancedConcepts /> }
      { location.pathname === '/projects' && <Projects /> }
    </div>
  );
}


export default App;