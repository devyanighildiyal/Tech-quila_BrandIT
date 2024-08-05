const express = require('express');
const connectToMongo = require('./db');  // Ensure this is required before using

const app = express();  // Initialize app first

app.use(express.json());  // Use middleware after initializing app

// Connect to MongoDB
connectToMongo();

// Set up routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
