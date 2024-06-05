// src/components/AddPost.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // Importar la función uuid
import credenciales from '../credenciales';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postId = uuidv4(); // Generar un ID único
            await addDoc(collection(credenciales.db, 'posts'), {
                id: postId, // Añadir el ID al documento del post
                content,
                createdAt: new Date()
            });
            setTitle('');
            setContent('');
            alert('Post added successfully');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div className='content-container-pyq'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='container'>
                    <label htmlFor="content">Pregunta</label>
                    <textarea className='txtMessage'
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button className='btnswicth' type="submit">Preguntar</button>
            </form>
        </div>
    );
};

export default AddPost;
