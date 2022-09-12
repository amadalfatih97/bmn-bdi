module.exports = (sequelize, Sequelize) =>{
    const Satuan = sequelize.define("Satuan",{
        idSatuan:{
            type: Sequelize.STRING,
        },
        satuan:{
            type: Sequelize.STRING,
        },
        aktif:{
            type: Sequelize.INTEGER,
        },
        ket:{
            type: Sequelize.TEXT,
        }

    });
    return Satuan;
};