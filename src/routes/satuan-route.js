const router = require('express').Router();
const { satuan } = require('../controllers');

// GET localhost:8080/data => Ambil data semua data
router.get('/', satuan.getData);

// // GET localhost:8080/data/2 => Ambil data semua data berdasarkan id = 2
// router.get('/:id', satuan.getDataByID);

// // POST localhost:8080/data/add => Tambah data data ke database
// router.post('/add', satuan.addData);

// // POST localhost:8080/data/2 => Edit data data
// router.post('/data/edit', data.editDatadata);

// // POST localhost:8080/data/delete => Delete data data
// router.post('/data/delete/', data.deleteDatadata);

module.exports = router;