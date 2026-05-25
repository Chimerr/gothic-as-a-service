
const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.set('trust proxy', true);
const PORT = process.env.PORT || 3000;

// Load dialogues from JSON
const dialogues = JSON.parse(fs.readFileSync(path.join(__dirname, 'feed.json'), 'utf-8'));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,
  message: {
    error: "Rate limit exceeded"
  }
});

app.use(limiter);


// Random dialogue endpoint
app.get('/', (req, res) => {
  const dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];
  res.json({ dialogue });
});



// Start server
app.listen(PORT, () => {
  console.log(`Gothic-as-a-Service is running on port ${PORT}`);
});