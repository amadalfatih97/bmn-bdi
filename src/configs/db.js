module.exports = {
    multipleStatements  : true,
    host                : 'localhost',
    user                : 'root',
    password            : '',
    database            : 'db_bdi',
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};