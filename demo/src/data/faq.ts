export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "WHAT IS NICO?",
    answer:
      "NICO is an independent streetwear label born from the underground. We design clothing for people who reject the mainstream and embrace the unconventional. Every piece is a statement.",
    category: "General",
  },
  {
    id: 2,
    question: "WHERE DO YOU SHIP?",
    answer:
      "We ship worldwide. Domestic orders (US) arrive in 3-5 business days. International orders take 7-14 business days. All orders over $150 qualify for free shipping.",
    category: "Shipping",
  },
  {
    id: 3,
    question: "WHAT'S YOUR RETURN POLICY?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original packaging. Sale items are final sale. We provide a prepaid return label for domestic orders.",
    category: "Returns",
  },
  {
    id: 4,
    question: "HOW DO I FIND MY SIZE?",
    answer:
      "Check our size guide on each product page. Most of our pieces are designed with an oversized or relaxed fit. When in doubt, size down for a more fitted look or stay true to size for the intended silhouette.",
    category: "Sizing",
  },
  {
    id: 5,
    question: "DO YOU RESTOCK SOLD-OUT ITEMS?",
    answer:
      "Most of our drops are limited edition. Once they're gone, they're gone. Follow us on social media and subscribe to our newsletter for restock announcements on select pieces.",
    category: "Products",
  },
  {
    id: 6,
    question: "CAN I CANCEL OR MODIFY MY ORDER?",
    answer:
      "Orders can be cancelled or modified within 2 hours of placement. After that, our warehouse begins processing and we cannot guarantee changes. Contact support immediately if you need to make a change.",
    category: "Orders",
  },
  {
    id: 7,
    question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.",
    category: "Payment",
  },
  {
    id: 8,
    question: "HOW CAN I TRACK MY ORDER?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track your order status from your profile page under 'Orders'.",
    category: "Shipping",
  },
  {
    id: 9,
    question: "ARE YOUR PRODUCTS SUSTAINABLE?",
    answer:
      "We're committed to reducing our impact. All cotton is organic or recycled, packaging is biodegradable, and we partner with ethical manufacturers. We publish an annual transparency report.",
    category: "General",
  },
  {
    id: 10,
    question: "HOW DO I CONTACT SUPPORT?",
    answer:
      "Email us at support@nicostore.com or DM us on Instagram @nico.official. We respond within 24 hours on business days. For urgent issues, use the live chat on our site (coming soon).",
    category: "General",
  },
];

export function getFaqByCategory(category: string): FaqItem[] {
  return faqItems.filter((f) => f.category === category);
}

export function getFaqCategories(): string[] {
  return [...new Set(faqItems.map((f) => f.category))];
}
