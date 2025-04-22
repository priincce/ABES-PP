import React from 'react';

const PostList = ({ posts, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Books List</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{post.name}</h3>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Year:</strong> {post.year}</p>
          <p><strong>Volume:</strong> {post.vol}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
