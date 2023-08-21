import React, { useEffect, useState } from 'react';



const [isAuthenticated, setIsAuthenticated] = useState(true);
const accessToken = localStorage.getItem('accessToken');



useEffect(() => {

  if (accessToken) {
    setIsAuthenticated(true);
  } else {
    setIsAuthenticated(false);
  }
}, [])

const handleLogout = () => {
  setIsAuthenticated(false);
  
 navigate('/login');
};
  // BTN
  onClick={handleLogout}
