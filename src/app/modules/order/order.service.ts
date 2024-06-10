import { TOrder } from "./order.interface";
import { MOrder } from "./order.model";

const createOrderDB = async (order: TOrder) => {
  const result = await MOrder.create(order);
  return result;
};

const getOrderDB = async () => {
  const result = await MOrder.find();
  return result;
};

const getOrderByEmailDB = async(email: string) =>{
    const result = await MOrder.find({ email: email })
    return result
}

export const OrderServices = {
  createOrderDB,
  getOrderDB,
  getOrderByEmailDB,
};
