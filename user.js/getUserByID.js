const express = require('express');
const connection = require('../sql.js');  
const app = express();

app.get('/users/:id',(req, res) => {   
    connection.query('SELECT * FROM user WHERE user_id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error getting user');
        } else {
            res.status(200).json(results);
        }
    });
}); 

module.exports = app;