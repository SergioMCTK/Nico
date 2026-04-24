export interface Order {
  id: string;
  date: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "delivered" | "shipped" | "processing";
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar: string;
  memberSince: string;
  favoriteIds: number[];
  orders: Order[];
}

export const currentUser: User = {
  id: 1,
  name: "Alex Moreno",
  email: "alex@nicostore.com",
  username: "@alexmrno",
  avatar: "linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)",
  memberSince: "2024-03-15",
  favoriteIds: [1, 4, 9, 16, 22, 27],
  orders: [
    {
      id: "NICO-20260301",
      date: "2026-03-01",
      items: [
        { name: "VOID HOODIE", quantity: 1, price: 120 },
        { name: "VENOM CHAIN", quantity: 1, price: 55 },
      ],
      total: 175,
      status: "delivered",
    },
    {
      id: "NICO-20260318",
      date: "2026-03-18",
      items: [
        { name: "ECLIPSE CARGO", quantity: 1, price: 145 },
        { name: "GLITCH TEE", quantity: 2, price: 120 },
      ],
      total: 265,
      status: "shipped",
    },
    {
      id: "NICO-20260420",
      date: "2026-04-20",
      items: [{ name: "OVERCAST COAT", quantity: 1, price: 320 }],
      total: 320,
      status: "processing",
    },
  ],
};
