const express = require('express');
const connection = require('../sql.js');  
const app = express();
app.get('/users', (req, res) => {    
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error getting users');
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = app;