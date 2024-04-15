const express = require('express');
const Menu = require('../models/Menu');
const { getAllMenuItems, postMenuItem } = require('../controller/menuControllers');

const router = express.Router();


// get all menu items 
router.get('/',getAllMenuItems)

// post a menu items
router.post('/', postMenuItem)



module.exports= router;