const mongoose = require("mongoose");

const ResturantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fooditem:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("resturant",ResturantSchema,"resturants");