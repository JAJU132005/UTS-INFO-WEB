import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, addDoc, where, getDocs } from 'firebase/firestore';
import credenciales from '../credenciales';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(credenciales.db, 'posts'));
    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      const postsArray = [];
      for (const doc of querySnapshot.docs) {
        const postData = { id: doc.id, ...doc.data() };
        const comentariosQuery = query(
          collection(credenciales.db, 'comentarios'),
          where('postId', '==', postData.id)
        );
        const comentariosSnapshot = await getDocs(comentariosQuery);
        const comentariosArray = [];
        comentariosSnapshot.forEach((comentarioDoc) => {
          comentariosArray.push({ id: comentarioDoc.id, ...comentarioDoc.data() });
        });
        postData.comentarios = comentariosArray;
        postsArray.push(postData);
      }
      setPosts(postsArray);
    });

    return () => unsubscribe();
  }, []);

  const addComment = async (postId, comentario) => {
    try {
      const newComment = {
        postId,
        comentario,
        createdAt: new Date(),
      };
      await addDoc(collection(credenciales.db, 'comentarios'), newComment);

      // Update the comments in the post
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comentarios: [...post.comentarios, newComment] }
            : post
        )
      );
    } catch (e) {
      console.error('Error adding comment: ', e);
    }
  };

  return (
    <div className='content-container'>
      <h2>Posts:</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} addComment={addComment} />
      ))}
    </div>
  );
};

const Post = ({ post, addComment }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className='container-List'>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <h4>Comentarios:</h4>
      <button className='btnpyq' onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
      </button>
      {showComments && (
        <ul>
          {post.comentarios && post.comentarios.map((comentario, index) => (
            <li key={index}>
              {comentario.comentario}
            </li>
          ))}
        </ul>
      )}
      <CommentForm postId={post.id} addComment={addComment} />
    </div>
  );
};

const CommentForm = ({ postId, addComment }) => {
  const [comentario, setComentario] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comentario.trim()) {
      addComment(postId, comentario);
      setComentario('');
      setShowForm(false);
    }
  };

  return (
    <div>
      {!showForm && <button className='btnpyq' onClick={() => setShowForm(true)}>Responder</button>}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Responder"
            required
          ></textarea>
          <button className='btnpyq' type="submit">Responder</button>
        </form>
      )}
    </div>
  );
};

export default PostList;









