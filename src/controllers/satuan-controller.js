const config = require('../configs/db');
const mysql = require('mysql');
const pool = mysql.createPool(config);
const db = require("../models");
const Satuan = db.satuan;
const random = require('randomstring');
const bycrypt = require('bcryptjs');


pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua
    getData(req,res){
        Satuan.findAll()
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send('error: '+err)
        })
    }
}