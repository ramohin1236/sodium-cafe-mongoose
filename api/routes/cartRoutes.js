const express = require("express")

const Carts = require('../models/Carts');
const { getCartsByEmail, addToCart, deleteCart, updateCart, getSingleCart } = require("../controller/cartController");
const router = express.Router();



router.get('/',getCartsByEmail)
router.post('/',addToCart)
router.delete('/:id', deleteCart)
router.put("/:id",updateCart)
router.get("/:id",getSingleCart)
module.exports= router