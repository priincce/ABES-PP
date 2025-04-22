import React, { useState, useEffect } from 'react';

const PostForm = ({ onSubmit, selectedPost, setSelectedPost }) => {
  const [form, setForm] = useState({
    name: '',
    author: '',
    year: '',
    vol: ''
  });

  useEffect(() => {
    if (selectedPost) setForm(selectedPost);
  }, [selectedPost]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', author: '', year: '', vol: '' });
    setSelectedPost(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Book Name" value={form.name} onChange={handleChange} required />
      <input name="author" placeholder="Author Name" value={form.author} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
      <input name="vol" placeholder="Volume" value={form.vol} onChange={handleChange} required />
      <button type="submit">{selectedPost ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default PostForm;
