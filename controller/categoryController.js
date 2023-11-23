import CategoryModel from "../models/categoryModel.js";
class CategoryController
{
    static getAllCategories =async(req,res)=>{
        try{
              const fetchAllCagtegories = await CategoryModel.find({});
               return res.status(200).json(fetchAllCagtegories);
        }catch(error){
            return res.status(400).json({message:error.message});
        }
    };
    static addNewCategory =async(req,res)=>{
        const {title}=req.body;
        try{
            if(title){
                const  newCategory =new CategoryModel({
                    title,
                });
                const savedCategory = await newCategory.save();
                if(savedCategory){
                    return res.status(200).json({message:"Category added successfully"});
                }
            } else{
                return res.status(400).json({message:"all fileds is required"})
            }
        }
        catch(error){
            return res.status(400).json({message:error.message});
        }
    };
}

export default CategoryController;