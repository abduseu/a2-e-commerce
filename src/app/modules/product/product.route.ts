import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

//Product routes
router.post("/", ProductController.createProduct);
//router.get('/', ProductController.getProduct)
router.get("/:productId", ProductController.getOneProduct);
router.put("/:productId", ProductController.updateProdcut);
router.delete("/:productId", ProductController.deleteProduct);
//router.get('/', ProductController.searchProduct);       // api/products?searchTerm=iphone

// fix with condition (two same get '/' routes)
router.get("/", (req, res) => {
  const searchTerm = req.query.searchTerm;
  if (searchTerm) {
    ProductController.searchProduct(req, res);
  } else {
    ProductController.getProduct(req, res);
  }
});

export const ProductRoutes = router;
