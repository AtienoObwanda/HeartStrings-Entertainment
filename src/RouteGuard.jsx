import React from 'react';
import { Route, Navigate } from 'react-router-dom';

//  route guard for admin routes
const AdminRoute = ({ element, userRole }) => {
  if (userRole === 'admin') {
    return <Route element={element} />;
  } else {
    // Redirect to unauthorized page for non-admin users
    return <Navigate to="/access-denied" replace />;
  }
};

//  route guard for user routes
const UserRoute = ({ element, userRole }) => {
  if (userRole === 'user') {
    return <Route element={element} />;
  } else {
    // Redirect to unauthorized page for non-user users
    return <Navigate to="/access-denied" replace />;
  }
};

export { AdminRoute, UserRoute };
