const express = require("express");
const app = express();
const cors = require("cors")
const { connectdb } = require("./config/db");
const { productschema } = require("./modal/product");


require("dotenv").config();

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// env variables
const port = process.env.port || 6969;


app.get('/' ,(req,res)=>{
res.send("hello products")
})


app.post( "/addproduct" ,  async (req, res) => {
  try {
 const   { image, productname, price, description } = req.body;
    const newProduct = new productschema ( { image, productname, price, description } );
    await newProduct.save();
     res.status(201).json({success:true , message:"product addedd successfully"});
  } catch (error) {
   res.status(400).json({success:false,message:"error meaaage"})
  }
});



app.get("/api/products", async (req, res) => {
  const products = await productschema.find();
  res.json(products);
});


// db and port connection confirmation
connectdb()
  .then(() => {
    console.log("database is connected");
    app.listen(port, () => {
      console.log("CORS-enabled web server listening on port");
    });
  })
  .catch(() => {
    console.log("database is not connected");
  });
