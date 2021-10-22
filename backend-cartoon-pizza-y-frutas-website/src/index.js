const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes'));

// server 
app.listen(app.get('port'), () => {
    console.log('Servidor ejecuntadonse en puerto', app.get('port'));
});
