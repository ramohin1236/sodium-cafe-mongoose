const Carts = require('../models/Carts');


const getCartsByEmail = async(req,res)=>{
    try{ 
      const email = req.query.email;
      const query= {email: email}
       const result = await  Carts.find(query).exec()
       res.status(200).json(result)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}





const addToCart =async(req,res)=>{
const {image,menuItemId, name,recipe,price,quantity,email}=req.body;
try{
   
   const cartItem = await Carts.create({
  
    menuItemId, 
    name,
    recipe,
    price,
    quantity,
    email,
    image
   })
   console.log(cartItem);
   res.status(201).json(cartItem)
}catch(error){
    res.status(500).json({message:error.message})
}
}


// delete product
const deleteCart = async(req,res)=>{
  const cartId = req.params.id;
  try{
       const deletedCartItem = await Carts.findByIdAndDelete(cartId);
       if(!deletedCartItem){
        return res.status(401).json({message: "Cart Items not found"})
       }
       res.status(200).json({message: "Cart Item Deleted Successfully!"})
  }catch(error){
    res.status(500).json({message:error.message})
}
}



// update cart item
const updateCart = async(req,res)=>{
    const cartId = req.params.id;
    const { menuItemId, name,recipe,price,quantity,email}=req.body;

    try{
        const updatedCart = await Carts.findByIdAndUpdate(cartId,{
            menuItemId,
             name,
             recipe,
             price,
             quantity,
             email
        },{
            new: true, runValidators:true
        })
        if(!updatedCart){
            return res.status(404).json({message: "Cart Item  not found"})
        }
        res.status(200).json(updatedCart)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
// get single item
const getSingleCart = async(req,res)=>{
    const cartId = req.params.id;
    const { menuItemId, name,recipe,price,quantity,email}=req.body;

    try{
         const cartItem = await Carts.findById(cartId)
         res.status(200).json(cartItem) 
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}








module.exports ={
    getCartsByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}