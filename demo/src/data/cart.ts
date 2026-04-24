export interface CartItem {
  productId: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  gradient: string;
}

export const mockCartItems: CartItem[] = [
  {
    productId: 1,
    name: "VOID HOODIE",
    price: 120,
    size: "L",
    quantity: 1,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    productId: 5,
    name: "STATIC BEANIE",
    price: 35,
    size: "ONE SIZE",
    quantity: 2,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
  },
  {
    productId: 22,
    name: "ECHO LONGSLEEVE",
    price: 72,
    size: "M",
    quantity: 1,
    gradient: "linear-gradient(135deg, #100010 0%, #200020 50%, #350035 100%)",
  },
];
