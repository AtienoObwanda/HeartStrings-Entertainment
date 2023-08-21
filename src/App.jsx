import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import ProjectRoutes from "./Routes";
import {AuthProvider} from './context/AuthContext'


function App() {
  return (
    <Router>
      <AuthProvider>
      <ProjectRoutes />
      </ AuthProvider>

    </Router>
  );
}

export default App;