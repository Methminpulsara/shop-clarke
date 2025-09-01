export default interface Cart {
  userId: number;
  products: {
    id: number;
    quantity: number;
  }[];
}

