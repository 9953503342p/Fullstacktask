const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9080;

app.use(cors({
    origin: 'https://fullstacktask-2.onrender.com'
}));


app.get('/api/greet', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
