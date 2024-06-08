import { TProduct } from "./product.interface";
import { MProduct } from "./product.model";

const createProductDB = async(product: TProduct)=>{
    const result = await MProduct.create(product)
    return result
}

export const productServices = {
    createProductDB,
}