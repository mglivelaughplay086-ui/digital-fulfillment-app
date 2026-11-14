const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your GitHub Pages frontend and local testing
app.use(cors({
  origin: [
    'https://mglivelaughplay086-ui.github.io',
    'http://localhost:4321'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Handle lead capture / order fulfillment form submissions
app.post('/api/fulfill-order', (req, res) => {
  const { email, product } = req.body;
  console.log(`Received submission for email: ${email}, toolkit: ${product}`);
  res.json({ 
    success: true, 
    message: 'Access granted successfully!',
    email: email 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
