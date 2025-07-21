import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../../controllers/product/ProductController.js";

const router = express.Router();

router.post('/products', createProduct)     
.get(getAllProducts); 
     
router.get('/products/:id', getProductById)
.put(updateProduct)  
.delete(deleteProduct);

export default router;
