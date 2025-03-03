export type TOrder = {
  _id: string;
  name: string;
  email: string;
  products: {
    product: {
      title: string;
      price: number;
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

export type TProduct = {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  img: string;
  isDeleted: boolean;
};

export interface TUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  profileImg?: string | null;
  cart?: TCartItem[];
  isBlocked: boolean;
}

export type TCartItem = {
  _id: string;
  item: {
    _id: string;
    title: string;
    author: string;
    price: number;
    img: string;
  };
  quantity: number;
};
