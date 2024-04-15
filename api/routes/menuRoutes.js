const express = require('express');
const Menu = require('../models/Menu');
const { getAllMenuItems, postMenuItem, deleteMenuItem, getMenuItem, updateMenuItem } = require('../controller/menuControllers');

const router = express.Router();


// get all menu items 
router.get('/',getAllMenuItems)

// post a menu items
router.post('/', postMenuItem)
// delete a menu items
router.delete('/:id', deleteMenuItem)
// get a menu item
router.get('/:id',  getMenuItem)
// update a menu item
router.patch('/:id',  updateMenuItem)



module.exports= router;