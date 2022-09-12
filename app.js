const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require("dotenv").config();
const{
    PORT_SERVER
} = process.env;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/brg-route');
const jenisAsetRoute = require('./src/routes/jenis-aset-route');
const satuanRoute = require('./src/routes/satuan-route');

app.use('/', appRoute);
app.use('/jenis-aset', jenisAsetRoute);
app.use('/satuan', satuanRoute);

// migrate db
// const db = require("./src/models");
// db.sequelize.sync();

app.listen(PORT_SERVER, ()=>{
    console.log('Server Berjalan di Port : '+PORT_SERVER);
});