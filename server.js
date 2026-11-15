const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Root homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fulfillment API endpoint
app.post('/api/fulfill-order', (req, res) => {
  res.json({ success: true, message: 'Order fulfilled successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
