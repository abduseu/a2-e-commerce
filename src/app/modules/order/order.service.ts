import { TOrder } from "./order.interface";
import { MOrder } from "./order.model";

//create
const createOrderDB = async (order: TOrder) => {
  const result = await MOrder.create(order);
  return result;
};

export const OrderServices = {
  createOrderDB,
};
