const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require("dotenv").convig();
const{
    PORT_SERVER
} = process.env;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/brg-route');
const jenisAsetRoute = require('./src/routes/jenis-aset-route');

app.use('/', appRoute);
app.use('/jenis-aset', jenisAsetRoute);

app.listen(PORT_SERVER, ()=>{
    console.log('Server Berjalan di Port : '+PORT_SERVER);
});