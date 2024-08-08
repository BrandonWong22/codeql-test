// vulnerable.js

const express = require('express');
const mysql = require('mysql');
const app = express();

// SQL Injection Vulnerability
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  });

  connection.query(query, (error, results) => {
    if (error) {
      res.send('Error in query');
      return;
    }
    res.json(results);
  });

  connection.end();
});

// XSS Vulnerability
app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  res.send(`<h1>Search results for: ${searchQuery}</h1>`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
