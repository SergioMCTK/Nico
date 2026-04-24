export interface Category {
  slug: string;
  name: string;
  description: string;
  type: "gender" | "clothing";
  gradient: string;
}

export const categories: Category[] = [
  {
    slug: "men",
    name: "MEN",
    description: "Explore the men's collection — raw, unfiltered streetwear.",
    type: "gender",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
  },
  {
    slug: "women",
    name: "WOMEN",
    description:
      "Women's collection — deconstructed silhouettes, bold statements.",
    type: "gender",
    gradient: "linear-gradient(135deg, #1a0010 0%, #6b003d 100%)",
  },
  {
    slug: "unisex",
    name: "UNISEX",
    description: "Gender-free pieces for everybody. No rules.",
    type: "gender",
    gradient: "linear-gradient(135deg, #0d0221 0%, #3a0ca3 100%)",
  },
  {
    slug: "hoodies",
    name: "HOODIES",
    description: "Oversized, cropped, zip-up — every hoodie you need.",
    type: "clothing",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1e1e48 100%)",
  },
  {
    slug: "tees",
    name: "TEES",
    description: "Graphic tees, longsleeves, crops — the essentials.",
    type: "clothing",
    gradient: "linear-gradient(135deg, #1a0500 0%, #6b1500 100%)",
  },
  {
    slug: "pants",
    name: "PANTS",
    description: "Cargos, joggers, trousers — bottom half sorted.",
    type: "clothing",
    gradient: "linear-gradient(135deg, #001a0d 0%, #006b2d 100%)",
  },
  {
    slug: "jackets",
    name: "JACKETS",
    description: "Bombers, parkas, shells — outerwear for every mood.",
    type: "clothing",
    gradient: "linear-gradient(135deg, #111111 0%, #383838 100%)",
  },
  {
    slug: "accessories",
    name: "ACCESSORIES",
    description: "The finishing touches — bags, hats, jewelry, socks.",
    type: "clothing",
    gradient: "linear-gradient(135deg, #0d1a0d 0%, #274d27 100%)",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
