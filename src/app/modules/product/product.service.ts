import { TProduct } from "./product.interface";
import { MProduct } from "./product.model";

const createProductDB = async (product: TProduct) => {
  const result = await MProduct.create(product);
  return result;
};

const getProductDB = async () => {
  const result = await MProduct.find();
  return result;
};

export const ProductServices = {
  createProductDB,
  getProductDB,
};
