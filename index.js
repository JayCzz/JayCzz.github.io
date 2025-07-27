const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files (your HTML/CSS)
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form data received:', { name, email, message });

  // You can add database/storage/email logic here

  res.send('Thank you for your message!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
