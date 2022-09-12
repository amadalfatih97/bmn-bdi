const dbConfig = require("../configs/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password,{
    host: dbConfig.host,
    dialect: "mysql" ,
    operatorAlias:0,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.satuan = require("./satuan.model.js")(sequelize, Sequelize);

module.exports = db;