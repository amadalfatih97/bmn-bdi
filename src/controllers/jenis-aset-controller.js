const config = require('../configs/db');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua karyawan
    getData(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM jenisaset WHERE jenisaset.aktif = 1;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },
    // Ambil data karyawan berdasarkan ID
    getDataByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM jenisaset WHERE kode = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },
    // Simpan data karyawan
    addData(req,res){
        let data = {
            jenis : req.body.jenis,
            aktif : req.body.aktif,
            ket : req.body.ket
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO jenis_aset SET ?;
                `
            , [data],
            function (error, results) {
                if(error) {
                    return  res.status(500).send({
                        success: false,
                        message: [{msg:'Failed '+error}]
                    })
                }; 
                res.status(200).send({
					success: true,
					message: [{msg:'Berhasil tambah data!'}]
				});
            });
            connection.release();
        })
    },
    // Update data karyawan
    editDataKaryawan(req,res){
        let dataEdit = {
            karyawan_nama : req.body.nama,
            karyawan_umur : req.body.umur,
            karyawan_alamat : req.body.alamat,
            karyawan_jabatan : req.body.jabatan
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE tabel_karyawan SET ? WHERE karyawan_id = ?;
                `
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data karyawan
    deleteDataKaryawan(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM tabel_karyawan WHERE karyawan_id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}