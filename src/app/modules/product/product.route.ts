import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

//all routes
router.post('/', ProductController.createProduct)
router.get('/', ProductController.getProduct)
router.get('/:productId', ProductController.getOneProduct)
router.put('/:productId', ProductController.updateProdcut)


export const ProductRoutes = router