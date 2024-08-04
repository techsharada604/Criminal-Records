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
    database: 'auth',
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT permission FROM user_accounts WHERE email = ? AND password = ?`;
    
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

app.listen(3008, () => {
    console.log('Server is running on port 3008');
});
