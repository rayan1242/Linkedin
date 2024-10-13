const express = require('express');
const connection = require('../sql.js');  
const app = express();

app.patch('/users/update/:id',(req, res) => {   
    const fieldsToUpdate = [];
    const values = [];

    if (req.body.name) {
        fieldsToUpdate.push('name = ?');
        values.push(req.body.name);
    }
    if (req.body.dob) {
        fieldsToUpdate.push('dob = ?');
        values.push(req.body.dob);
    }
    if (req.body.profile_pic) {
        fieldsToUpdate.push('profile_pic = ?');
        values.push(req.body.profile_pic);
    }
    if (req.body.location_city) {
        fieldsToUpdate.push('location_city = ?');
        values.push(req.body.location_city);
    }
    if (req.body.location_state) {
        fieldsToUpdate.push('location_state = ?');
        values.push(req.body.location_state);
    }
    if (req.body.location_country) {
        fieldsToUpdate.push('location_country = ?');
        values.push(req.body.location_country);
    }

    if (fieldsToUpdate.length === 0) {
        return res.status(400).send('No fields to update');
    }

    values.push(req.params.id);

    const query = `UPDATE user SET ${fieldsToUpdate.join(', ')} WHERE user_id = ?`;

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).send('User updated successfully');
        }
    });
});

module.exports = app;