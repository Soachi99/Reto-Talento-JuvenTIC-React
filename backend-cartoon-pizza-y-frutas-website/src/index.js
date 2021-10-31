const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// server 
app.listen(port, () => {
    console.log('Servidor ejecuntadonse en puerto', port);
});

