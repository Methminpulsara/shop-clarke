import Product from "./Product";

export default interface CartItems {
  product: Product;
  quantity: number;
}

export default interface Cart {
  id?: number;
  userId: number;
  items: CartItems[];
  total?: number;
}
