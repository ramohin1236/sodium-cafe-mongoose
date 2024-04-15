
const express = require('express');
const { getAllUsers, createUser, deleteUser, makeAdmin, getAdmin } = require('../controller/userControllers');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const router = express.Router();




router.get('/',verifyToken,verifyAdmin, getAllUsers)

router.post('/', createUser)
router.delete('/:id',verifyToken,verifyAdmin, deleteUser)
router.get('/admin/:email',verifyToken, getAdmin)
router.patch('/admin/:id',verifyToken,verifyAdmin, makeAdmin)

module.exports= router