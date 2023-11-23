import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
     }
});

const CategoryModel = mongoose.model("Categories", categorySchema);

export default CategoryModel;
