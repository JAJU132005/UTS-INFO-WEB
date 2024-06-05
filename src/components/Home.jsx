// src/components/Home.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './HomePage/Header';
import Carousel from './HomePage/Carousel';
import Marketing from './HomePage/Marketing';
import Featurettes from './HomePage/Feauretess';
import Noticias from './Noticias';

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Carousel />
            <hr className="featurette-divider" />
            <Marketing />
            <hr className="featurette-divider" />
            <Featurettes />
          </main>
        } />
        <Route path="/noticias" element={<Noticias/>} />
      </Routes>
    </div>
  );
}

export default Home;


