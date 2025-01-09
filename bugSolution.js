const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data ...
    // Simulate an error
    // if (userId === 'error') throw new Error('Failed to fetch user');
    res.json({ id: userId });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));