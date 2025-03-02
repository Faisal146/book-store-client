export type TOrder = {
  _id: string;
  name: string;
  email: string;
  products: {
    product: {
      title: string;
      price: string;
    };
    quantity: number;
    totalPrice?: number;
  }[];
  totalQuantity?: number;
  totalPrice?: number;
  user?: {
    name: string;
    email: string;
  };
  paid: boolean;
  payment_method: string;
  status: string;
  address: {
    division: string;
    district: string;
    upazila: string;
    area: string;
  };
};
