// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Configure the server
app.use(express.static('public'));
app.use(express.json());

// Create a route to get comments
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, body: 'Hello' },
        { id: 2, body: 'Goodbye' }
    ]);
});

// Create a route to post comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    res.json({ status: 'success' });
});

// Create a route to delete comments
app.delete('/comments/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ status: 'success' });
});

// Create a route to update comments
app.put('/comments/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.json({ status: 'success' });
});