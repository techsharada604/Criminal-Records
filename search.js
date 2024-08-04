const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'criminal_record',
});

app.post('/search', (req, res) => {
  const { table, ...attributes } = req.body;
  let conditions = [];
  let values = [];
  
  for (let [key, value] of Object.entries(attributes)) {
    if (key.startsWith('at') && value) {
      let valKey = key.replace('at', 'val');
      conditions.push(`${value} LIKE ?`);
      values.push(req.body[valKey]);
    }
  }
  
  let sql = `SELECT * FROM ${table} WHERE ${conditions.join(' AND ')}`;

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
