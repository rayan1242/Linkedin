const express = require('express');
const connection = require('../sql.js');  
const app = express();

app.post('/users/create',(req, res) => {   
    connection.query('INSERT INTO user (name, dob, profile_pic, location_city, location_state, location_country ) VALUES (?, ?, ?, ?, ?, ?)', 
    [req.body.name, req.body.dob, req.body.profile_pic, req.body.location_city, req.body.location_state, req.body.location_country], 
    (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error creating user');
        } else {
            res.status(201).send('User created successfully');
        }
    });
}); 

module.exports = app;