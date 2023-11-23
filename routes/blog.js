import express from 'express';
import AuthController from '../controller/authController.js';
import BlogController from '../controller/BlogController.js';
import CategoryController from '../controller/categoryController.js';
import multer from 'multer';
import checkIsUserAuthenticated from '../middlewares/authMiddleware.js';
// import { Jwt } from 'jsonwebtoken';

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`public/upload`);
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({storage:storage});
const router= express.Router();

router.post("/user/register",AuthController.userRegistraction);
router.post("/user/login",AuthController.userLogin);

router.get("/get/allblogs",checkIsUserAuthenticated , BlogController.getAllBlogs);
router.post("/add/blog",upload.single("thumbnail"),checkIsUserAuthenticated , BlogController.addNewBlog);
router.get("/get/blog/:id",checkIsUserAuthenticated , BlogController.getSingleBlog);

router.get("/get/categories",checkIsUserAuthenticated , CategoryController.getAllCategories);
router.post("/add/category", checkIsUserAuthenticated ,CategoryController.addNewCategory);

export default router;
