const express = require('express');
const axios = require('axios');

const app = express();
const baseUrl = 'https://jsonplaceholder.typicode.com';

// GET /api/comments
app.get('/api/comments', async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is set to 10 if not provided
    const response = await axios.get(`${baseUrl}/comments?_limit=${limit}`);
    const comments = response.data;
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/posts
app.get('/api/posts', async (req, res) => {
  try {
    const limit = req.query.limit || 10; // Default limit is set to 10 if not provided
    const response = await axios.get(`${baseUrl}/posts?_limit=${limit}`);
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

