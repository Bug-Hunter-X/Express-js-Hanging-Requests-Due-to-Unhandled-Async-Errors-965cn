const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  // Problem: If the asynchronous operation fails, the response is never sent
  // This leads to a hanging request on the client-side
  res.json({ id: userId });
});
app.listen(3000, () => console.log('Server listening on port 3000'));