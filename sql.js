// Import the mysql2 package
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
// Create a connection object with the database credentials
const connection = mysql.createConnection({
  host: '127.0.0.1', // Replace with your database host
  user: 'root', // Replace with your database username
  password: process.env.password, // Replace with your database password
  database: 'linkedin' // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Export the connection object
module.exports = connection;