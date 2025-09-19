const base = import.meta.env.BASE_URL;

const data = [
  {
    category: "Drinks",
    name: "Pepsi",
    image: base + "pepsi.png",   // ✅ endi /martian/pepsi.png bo‘ladi
    prices: [
      { size: "0.5L", price: 7000 },
      { size: "1L", price: 14000 },
    ],
  },
  {
    category: "Drinks",
    name: "Fanta",
    image: base + "fanta.png",
    prices: [
      { size: "0.5L", price: 8000 },
      { size: "1L", price: 15000 },
    ],
  },
  {
    category: "Drinks",
    name: "Cola",
    image: base + "cola.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Drinks",
    name: "Sprite",
    image: base + "sprite.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Drinks",
    name: "Moxitto",
    image: base + "moxitto.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Sweets",
    name: "Raspberry Cheesecake",
    image: base + "cheesecake-strawberry.png",
    prices: [
      { size: "slice", price: 12000 },
      { size: "whole", price: 70000 },
    ],
  },
  {
    category: "Sweets",
    name: "Lotus",
    image: base + "lotus.png",
    prices: [
      { size: "1 pcs", price: 5000 },
      { size: "6 pcs", price: 28000 },
    ],
  },
];

export default data;
