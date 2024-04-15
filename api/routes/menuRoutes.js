const express = require('express');
const Menu = require('../models/Menu');
const { getAllMenuItems, postMenuItem, deleteMenuItem } = require('../controller/menuControllers');

const router = express.Router();


// get all menu items 
router.get('/',getAllMenuItems)

// post a menu items
router.post('/', postMenuItem)
// delete a menu items
router.delete('/:id', deleteMenuItem)



module.exports= router;