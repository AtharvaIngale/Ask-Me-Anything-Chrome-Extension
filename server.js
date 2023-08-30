const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/chat', (req, res) => {
  const question = req.body.question;
  // You can customize the response logic here
  const response = "Hello from GenAI! How can I help you today?";
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Mock GenAI API is running on http://localhost:3000`);
});
