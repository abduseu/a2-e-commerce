import { Request, Response } from "express";
import { ProductServices } from "./product.service";

//create
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

//get all product
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

//get single product
const getOneProduct = async (req: Request, res: Response) => {
  try {
    //request
    const { productId } = req.params;

    //service
    const result = await ProductServices.getOneProductDB(productId);

    //response
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product fetched failed!",
      data: error,
    });
  }
};

//update product
const updateProdcut = async (req: Request, res: Response) => {
  try {
    //request
    const { productId } = req.params;
    const updateData = req.body;

    //service
    const result = await ProductServices.updateProdcutDB(productId, updateData);

    //response
    if (result) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product update failed!",
      data: error,
    });
  }
};

//delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    //request
    const { productId } = req.params;

    //service
    const result = await ProductServices.deleteProductDB(productId);

    //response
    if (result) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found.",
        data: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to delete!",
      data: error,
    });
  }
};

//search product
const searchProduct = async (req: Request, res: Response) => {
  try {
    //request
    const searchTerm = req.query.searchTerm as string;

    //service
    const result = await ProductServices.searchProductDB(searchTerm);

    //response
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product search query failed!",
      data: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  getOneProduct,
  updateProdcut,
  deleteProduct,
  searchProduct,
};
