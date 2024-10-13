const express = require('express');
const connection = require('../sql.js');  
const app = express();

app.delete('/users/delete/:id',(req, res) => {   
    connection.query('DELETE FROM user WHERE user_id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error deleting user');
        } else {
            res.status(200).send('User deleted successfully');
        }
    });
});

module.exports = app;