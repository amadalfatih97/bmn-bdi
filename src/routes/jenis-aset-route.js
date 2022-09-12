const router = require('express').Router();
const { jenisAset } = require('../controllers');

// GET localhost:8080/karyawan => Ambil data semua karyawan
router.get('/', jenisAset.getData);

// // GET localhost:8080/karyawan/2 => Ambil data semua karyawan berdasarkan id = 2
router.get('/:id', jenisAset.getDataByID);

// // POST localhost:8080/karyawan/add => Tambah data karyawan ke database
router.post('/add', jenisAset.addData);

// // POST localhost:8080/karyawan/2 => Edit data karyawan
// router.post('/karyawan/edit', karyawan.editDataKaryawan);

// // POST localhost:8080/karyawan/delete => Delete data karyawan
// router.post('/karyawan/delete/', karyawan.deleteDataKaryawan);

module.exports = router;