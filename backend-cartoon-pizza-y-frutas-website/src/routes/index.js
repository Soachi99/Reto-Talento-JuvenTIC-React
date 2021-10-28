const express = require('express');
const router = express.Router();
const nodemailer =  require('nodemailer');
const { google } = require('googleapis');
const { oauth2 } = require('googleapis/build/src/apis/oauth2');
const { gmail } = require('googleapis/build/src/apis/gmail');


router.get('/', (req, res) => {
    res.send('welcome');
})

router.post('/enviar-contacto', (req, res) => {
    const {asunto, nombre, email, mensaje} = req.body;
    
    const contentHtml = `
        <h1>Informacion de la persona:</h1>
        <ul>
            <li>Asunto: ${asunto} </li>
            <li>Nombre: ${nombre} </li>
            <li>Correo: ${email} </li>
            <li>Mensaje: ${mensaje} </li>
        </ul>
    `;

    const clientID = '59869306709-pfdpllnp06q6kbguilck18t2f5dvfde8.apps.googleusercontent.com';
    const clientSecret = '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';
    const refreshToken = '1//0482Yyo4ZHiQdCgYIARAAGAQSNwF-L9Irx9xFl-3GW4l57qZTvA1r1HDgaEX4pIPNky4XgsYGJrBbvtU1VyOk6mJRkjfqgoeBv8k';
    const redirectURI = 'https://developers.google.com/oauthplayground';

    const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
    oAuth2Client.setCredentials({refresh_token: refreshToken});    

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type : "OAuth2",
                    user : 'cartooncliente@gmail.com',
                    clientId : clientID,
                    clientSecret : clientSecret,
                    refreshToken : refreshToken,
                    accessToken : accessToken
                }
            })

            let destinatario = 'cartooncliente@gmail.com';

            const options = {
                from : email,
                to : destinatario,
                subject : "Informacion de la persona",
                html : contentHtml,
            }
            const res = await transporter.sendMail(options);
            return res;
        } catch(error) {
            console.log(error)
        }
    }

    sendMail()
        .then(result => {
            res.redirect('http://localhost:3000/enviar-contacto')
            console.log('sent', result)
        })
        .catch(error => console.log(error));
        
});

router.post('/envio-reserva', (req, res) => {
    const { 
        nombre, 
        email, 
        telefono, 
        numPersonas, 
        servicio, 
        fecha, 
        hora, 
        mensaje 
    } = req.body;
    console.log(req.body)

    const contentHtml = `
        <h1>Informacion de la reserva:</h1>
        <ul>
            <li>nombre: ${nombre} </li>
            <li>Correo: ${email} </li>
            <li>Telefono: ${telefono} </li>
            <li>Numero de personas: ${numPersonas} </li>
            <li>Servicio: ${servicio} </li>
            <li>Fecha: ${fecha} </li>
            <li>Hora: ${hora} </li>                        
        </ul>
        <p>Indicaciones especiales: ${mensaje} </p>
    `;

    const clientID = '59869306709-pfdpllnp06q6kbguilck18t2f5dvfde8.apps.googleusercontent.com';
    const clientSecret = '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';
    const refreshToken = '1//0482Yyo4ZHiQdCgYIARAAGAQSNwF-L9Irx9xFl-3GW4l57qZTvA1r1HDgaEX4pIPNky4XgsYGJrBbvtU1VyOk6mJRkjfqgoeBv8k';
    const redirectURI = 'https://developers.google.com/oauthplayground';

    const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
    oAuth2Client.setCredentials({refresh_token: refreshToken});

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type : "OAuth2",
                    user : 'cartooncliente@gmail.com',
                    clientId : clientID,
                    clientSecret : clientSecret,
                    refreshToken : refreshToken,
                    accessToken : accessToken
                }
            })

            let destinatarios = ['cartooncliente@gmail.com', email];

            const options = {
                from : 'cartooncliente@gmail.com',
                to : destinatarios,
                subject : "Informacion de la reserva",
                html : contentHtml,
            }
            const res = await transporter.sendMail(options);
            return res;
        } catch(error) {
            console.log(error)
        }
    }

    sendMail()
        .then(result => {
            res.redirect('http://localhost:3000/admin/reservas')
            console.log('sent', result)
        })
        .catch(error => console.log(error));

    
});

module.exports = router;


/* 
    sdghdlkhgd
    dilan enrique
    test@test.com
    sdlfjsdkgjsdlgjsdlgñhs ahgdlgjdhb
*/