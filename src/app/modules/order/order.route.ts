import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router()

//All order routes
router.post('/', OrderControllers.createOrder)
// router.get('/', OrderControllers.getOrder)


router.get('/', (req, res)=>{
    const emailQuery = req.query.email;

    if(emailQuery){
        OrderControllers.getOrderByEmail(req, res)      //get email query
    }else{
        OrderControllers.getOrder(req, res)             //get all
    }
})


export const OrderRoutes = router