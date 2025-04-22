const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());


function readData() {
  const data = fs.readFileSync('data.json', 'utf-8');
  return JSON.parse(data);
}


function writeData(data) {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

// Create a new post
app.post('/api/posts', (req, res) => {
  const { name, author, year, vol } = req.body;
  const posts = readData();
  const newPost = {
    id: Date.now(),
    name,
    author, 
    year,
    vol
  };
  posts.push(newPost);
  writeData(posts);
  res.status(201).json(newPost);
});

// Read all posts
app.get('/api/posts', (req, res) => {
  const posts = readData();
  res.json(posts); 
});

// Read one post by ID
app.get('/api/posts/:id', (req, res) => {
      const posts = readData();
      const post = posts.find(p => p.id == req.params.id);
      if (post) res.json(post);
      else res.status(404).json({ message: 'Post not found' });
 });
    
app.put('/api/posts/:id', (req, res) => {
const { name, author, year, vol } = req.body;
let posts = readData();
const index = posts.findIndex(p => p.id == req.params.id);
if (index === -1) return res.status(404).json({ message: 'Post not found' });

posts[index] = {
      ...posts[index],
      name,
      author,
      year,
      vol
};

writeData(posts);
res.json(posts[index]);
});

app.delete('/api/posts/:id', (req, res) => {
let posts = readData();
const newPosts = posts.filter(p => p.id != req.params.id);
if (newPosts.length === posts.length)
      return res.status(404).json({ message: 'Post not found' });

writeData(newPosts);
res.json({ message: 'Post deleted successfully' });
});
    
app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
});