const Resturant = require("../model/Resturant");

const ResturantController = ({
    create:async(req,res)=>{
        try {
            const { name,fooditem,location, rating } = req.body;
            if(!name || !fooditem || !location || !rating){
                return res.status(400).json({Message:"missing required fields"})
            }
            const resturant = await Resturant.findOne({name});
            if (resturant) {
              return res
                .status(400)
                .json({ message: "resturant name already exits" });
            }
            const newResturant = new Resturant({
              name,
              fooditem,
              location,
              rating
            });
            await newResturant.save();
            res
              .status(200)
              .json({ message: "resturant created successfully",newResturant });
        } catch (error) {
            res.status(500).json({message:error.message})
        }
        
    },
    getAllResturant:async(req,res)=>{
        try {
            const resturant = await Resturant.find();
            res.status(200).json({message:"all resturants",resturant})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getResturantById:async(req,res)=>{
        try {
            const resturantId = req.params.id;
            const resturant = await Resturant.findById(resturantId);
            if(!resturant){
               return res.status(400).json({message:"resturant not found"})
            }
            res.status(200).json({message:resturant})
        } catch (error) {
           res.status(500).json({message:error.message}) 
        }
    },
    updateResturantById:async(req,res)=>{
        try {
            const resturantId = req.params.id;
            const {name,fooditem,location,rating} = req.body;
            const resturant = await Resturant.findByIdAndUpdate(resturantId);
            if(!resturant){
                return res.status(400).json({message:"resturant not found"})
            }
            resturant.name = name;
            resturant.fooditem = fooditem;
            resturant.location = location;
            resturant.rating = rating;
            const updatedResturant = await resturant.save(); 
            res.status(200).json({message:"Updated successfully",updatedResturant})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    deleteResturantById:async(req,res)=>{
        try {
            const resturantId = req.params.id;
            const deletedResturant = await Resturant.findByIdAndDelete(resturantId);
            if(!deletedResturant){
                return res.status(400).json({message:"resturant not found"})
            }
            res.status(200).json({message:"resturant deleted successfully",deletedResturant})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
    
})

module.exports = ResturantController;