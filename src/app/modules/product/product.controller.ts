import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    //request
    const product = req.body;

    //service
    const result = await ProductServices.createProductDB(product);

    //response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product creation failed!",
      data: error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    //service
    const result = await ProductServices.getProductDB();

    //response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Products fetched failed!",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
};
