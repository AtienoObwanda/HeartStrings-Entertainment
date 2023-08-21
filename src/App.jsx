import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ProjectRoutes from "./Routes";


function App() {


    // // Simulate login
    // const login = () => {
    //   setIsAuthenticated(true);
    // };
  
    // // Simulate logout
    // const logout = () => {
    //   setIsAuthenticated(false);
    // };

  return (
    <Router>
      <ProjectRoutes />

    </Router>
  );
}

export default App;