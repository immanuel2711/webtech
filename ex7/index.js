const express = require('express');
// Create an Express application
const app = express();
const port = 3000;
// Define a route for the root URL ("/")
app.get('/', (req, res) => {
 res.send('Hello, this is the main page!');
});
// Define a route for "/hello"
app.get('/hello', (req, res) => {
 res.send('Hello, world!');
});
// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});
