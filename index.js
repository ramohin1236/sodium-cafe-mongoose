const express = require('express')
const app = express();
const cors =require('cors');
const port = process.env.PORT || 8000;
const jwt = require('jsonwebtoken');
require('dotenv').config()
const mongoose = require("mongoose");




// middleware
app.use(cors());
app.use(express.json())


// mongoose connect
mongoose
.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vjcdyry.mongodb.net/sodium-cafe?retryWrites=true&w=majority&appName=Cluster0`)
.then(
    console.log("mongodb database connected successfully")
)
.catch((error)=>console.log("error connecting to mongodb", error))



// generate jwt token
app.post('/jwt', (req,res)=>{
    const user= req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '365d'
    })
    res.send({token})
})









// get all menu items
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
const userRoutes = require("./api/routes/userRoutes")



app.use('/menu',menuRoutes)
app.use('/carts',cartRoutes)
app.use('/users',userRoutes)



















app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })