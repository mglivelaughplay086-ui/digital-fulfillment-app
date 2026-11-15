const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files (index.html, CSS, client-side JS) from the current folder
app.use(express.static(path.join(__dirname)));

// Fallback root route in case static file serving needs a direct index catch
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Your fulfillment API endpoint
app.post('/api/fulfill-order', (req, res) => {
  res.json({ success: true, message: 'Order fulfilled successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
