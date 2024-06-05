// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import credenciales from './components/credenciales';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Pyq from './components/pyq';
import Noticias from './components/Noticias';

import './App.css';

const auth = getAuth(credenciales.appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase ? usuarioFirebase : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home correoUsuario={usuario?.email} />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/pyq" element={<ProtectedRoute element={Pyq} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



