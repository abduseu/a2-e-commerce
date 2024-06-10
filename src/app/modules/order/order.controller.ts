import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    //request
    const order = req.body;

    //service
    const result = await OrderServices.createOrderDB(order);

    //response
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to create order!",
      data: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
