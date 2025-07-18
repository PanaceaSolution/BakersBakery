import express from "express";
import { createProduct } from "../../controllers/product/ProductController.js";

const router = express.Router();

router.post("/product", createProduct);

export default router;
