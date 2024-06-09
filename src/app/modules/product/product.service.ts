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

const getOneProductDB = async(productId: string) =>{
    const result = await MProduct.findOne({ _id: productId })
    return result
}

const updateProdcutDB = async(productId: string, updateData: Partial<TProduct>)=>{
    const result = await MProduct.findOneAndUpdate(
        { _id: productId },
        { $set: updateData },
        { new: true }
    )
    return result
}

const deleteProductDB = async(productId: string)=>{
  const result = await MProduct.findOneAndDelete({ _id: productId })
  return result
}

export const ProductServices = {
  createProductDB,
  getProductDB,
  getOneProductDB,
  updateProdcutDB,
  deleteProductDB,
};
