const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Another route
app.get('/about', (req, res) => {
    res.send('This is a demo Node.js application.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
