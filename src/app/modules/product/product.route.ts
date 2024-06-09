import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

//Product routes
router.post('/', ProductController.createProduct)
router.get('/', ProductController.getProduct)
router.get('/:productId', ProductController.getOneProduct)
router.put('/:productId', ProductController.updateProdcut)
router.delete('/:productId', ProductController.deleteProduct)


export const ProductRoutes = router