const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome');
})

router.post('/enviar-contacto', (req, res) => {
    const {asunto, nombre, email, mensaje, datos} = req.body;
    console.log(req.body)
    res.redirect('http://localhost:3000/enviar-contacto')
    //console.log(datos.email)
});

module.exports = router;


/* 
    sdghdlkhgd
    dilan enrique
    test@test.com
    sdlfjsdkgjsdlgjsdlgñhs ahgdlgjdhb
*/