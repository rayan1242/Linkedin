const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connection = require('./sql.js');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;
const getAllUser = require('./user.js/getAllUsers.js'); 
const getUserByID = require('./user.js/getUserByID.js');
const createUser = require('./user.js/createUser.js');  
const updateUser = require('./user.js/updateUser.js');
const deleteUser = require('./user.js/deleteUser.js');
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});

if(connection) {
    console.log('Connected to the database');
}else{
    console.log('Error connecting to the database');
}

app.get('/users',getAllUser);
app.get('/users/:id',getUserByID);
app.post('/users/create',createUser);
app.patch('/users/update/:id',updateUser);
app.delete('/users/delete/:id',deleteUser);