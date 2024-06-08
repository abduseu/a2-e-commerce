import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

//all routes
router.post('/', ProductController.createProduct)


export const ProductRoutes = router