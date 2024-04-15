const express = require('express');
const mongoose = require ('mongoose')
const Payment = require('../models/Payment');
const verifyToken = require('../middleware/verifyToken');
const  ObjectId  = mongoose.Types.ObjectId;
const router = express.Router();
const Cart = require('../models/Carts');





router.post('/',verifyToken,async(req,res)=>{
    const payment = req.body;
    try{
           const paymentRequest = await Payment.create(payment)
        //    delete cart items after payments
        const cardIds = payment.cartIds.map(id=> new ObjectId(id))

        const deleteCartRequest = await Cart.deleteMany({_id: {$in: cardIds}})

           res.status(200).json({paymentRequest})
    }catch(error){
      res.status(404).json({message: error.message})
    }
})



router.get('/', verifyToken, async(req,res)=>{
    const email = req.query.email;
    const query={email:email};
    try{
     const decodedEmail = req.decoded.email;
     if(email !== decodedEmail ){
        res.status(403).json({message: "Forbidden access"})
     }
     const result = await Payment.find(query).sort({createdAt: -1}).exec()
     res.status(200).json(result)
    }catch(error){
      res.status(404).json({message: error.message})
    }
})


module.exports= router;