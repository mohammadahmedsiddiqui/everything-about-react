const mongoose = require("mongoose")


const product = new mongoose.Schema({
image:{
    type:String,
    required:true,
     trim:true,
    lowercase:true

},
productname:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
},
price:{
    type:Number,
    required:true,
    trim:true,
},
description:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
}


   
},{
    timestamp:true
})



const productschema = mongoose.model("productschema", product)


module.exports = {productschema}