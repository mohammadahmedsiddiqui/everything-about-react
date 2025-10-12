const mongoose = require("mongoose")
require("dotenv").config()


const uri=process.env.uri
async function  connectdb(params) {
    try {
        mongoose.connect(uri)
    } catch (error) {
        console.log("error", error.message)
    }
}


module.exports={connectdb}