import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const API_URL = 'http://localhost:3000/api/posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addOrUpdatePost = async (post) => {
    if (post.id) {
      await axios.put(`${API_URL}/${post.id}`, post);
    } else {
      await axios.post(API_URL, post);
    }
    fetchPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchPosts();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Manager</h1>
      <PostForm onSubmit={addOrUpdatePost} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      <PostList posts={posts} onDelete={deletePost} onEdit={setSelectedPost} />
    </div>
  );
};

export default App;
