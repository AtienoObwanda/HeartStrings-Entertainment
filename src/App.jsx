import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectRoutes from "./Routes";
import Preloader from 'Preloader';




function App() {
   // Loading state
   const [isLoading, setIsLoading] = useState(true);
 
   useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 3000));
          setIsLoading(false);
      } catch (error) {
        console.error("Error loading data: ", error);
        setIsLoading(false);
      }
    };
  
    loadData();
  }, []);
  



  return (
    <Router>
  

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ProjectRoutes />
        </>
      )}
    </Router>
  );
  
}

export default App;