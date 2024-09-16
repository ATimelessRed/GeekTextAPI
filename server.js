const express = require('express');
const app = express();
const connection = require('./db');
require('dotenv').config();

app.use(express.json()); // for parsing application/json

// Basic route to get data from database
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
