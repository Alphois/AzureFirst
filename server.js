const express = require('express');
const app = express();
const port = 3000; // Change the port number if needed

// Serve static files from the current directory
app.use(express.static('.'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});