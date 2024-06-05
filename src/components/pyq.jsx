// src/components/pyq.jsx
import React from 'react';
import AddPost from './preguntas/AddPost';
import PostList from './preguntas/PostList';
import Header from './HomePage/Header';

const Pyq = () => {
  return (
    <div className=''>
        <Header/>
        <p></p>
        <h2>Preguntas y Respuestas</h2>
        <AddPost />
        <PostList />
    </div>
  );
}

export default Pyq;

