import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router()

//All order routes
router.post('/', OrderControllers.createOrder)
router.get('/', OrderControllers.getOrder)


export const OrderRoutes = router