const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'root',
    database: 'laroma'
});

app.get('/items', (req, res)=> {
    db.query('SELECT * FROM team', (err, data) => {
        if (err) return res.status(500).json({ error: 'Erreur lors de la récupération des éléments', details: err });
        return res.json(data)
    });
});

app.get('/', (req, res) => {
    return res.json('Received a GET HTTP method');
});

app.listen(8081, () => {
    console.log('App listening on port 8081!');
});