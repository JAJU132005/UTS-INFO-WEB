
// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import credenciales from './credenciales';

const auth = getAuth(credenciales.appFirebase);

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = auth.currentUser;
  const location = useLocation();

  return user ? <Component {...rest} /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;


