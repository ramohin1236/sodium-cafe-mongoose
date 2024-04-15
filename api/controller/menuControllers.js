const Menu = require("../models/Menu");

const getAllMenuItems=async(req,res)=>{
    try{
       const menus = await Menu.find({}).sort({createdAt: -1});
       res.status(200).json(menus)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


// post a menu

const postMenuItem =async(req,res)=>{
    const newItem = req.body;
    try{
        const result = await Menu.create(newItem)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// delete a menu

const deleteMenuItem =async(req,res)=>{
     const menuId = req.params.id;
     try{
       const deleteItem =await Menu.findByIdAndDelete(menuId)

       if(!deleteItem){
           return res.status(404).json({message: 'Menu not found!'})
       }



       res.status(200).json({message: "Menu Item deleted successfully!"})
     }catch(error){
        res.status(500).json({message: error.message})
    }
}
// get a single menu

const getMenuItem =async(req,res)=>{
     const menuId = req.params.id;
     try{
       const menuItem =await Menu.findById(menuId)


       res.status(200).json(menuItem)
     }catch(error){
        res.status(500).json({message: error.message})
    }
}
// update a single menu

const updateMenuItem =async(req,res)=>{
     const menuId = req.params.id;
     const {name,recipe,category,price,image}=req.body;
     try{
       const updateItem =await Menu.findByIdAndUpdate(menuId,{name,recipe,category,price,image},{new:true, runValidators:true})
       
       if(!updateItem){
        return res.status(404).json({message: 'Menu not found!'})
       }

       res.status(200).json({message: "Menu Item updated successfully!"})
     }catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports={
    getAllMenuItems ,
    postMenuItem,
    deleteMenuItem,
    getMenuItem,
    updateMenuItem
}