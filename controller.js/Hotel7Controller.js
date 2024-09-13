const Hotel = require("../model/Hotel7");

const Hotel7Controller = ({
   
   create:async(req,res)=>{
    try {
        const {name,price,rating,fooditem} = req.body;
        if(!name || !price || !rating ||!fooditem){
            return res.status(400).json({message:"missing required fields"})
        }
        const food = await Hotel.findOne({name});
        if(food){
            return res.status(400).json({message:"name already exits"})
        }
        const newFood = new Hotel({
            name,
            price,
            rating,
            fooditem
        })
        await newFood.save();
        res.status(200).json({message:"food created successfully",newFood})
    } catch (error) {
      res.status(500).json({message:error.message})   
    }
   },
   getAllFood:async(req,res)=>{
    try {
        const foods = await Hotel.find();
        res.status(200).json({message:"all foods",foods})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
   }
})

module.exports = Hotel7Controller;