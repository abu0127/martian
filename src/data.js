const data = [
  {
    category: "Drinks",
    name: "Pepsi",
    image: "/pepsi.png",   // ✅ public ichidan to‘g‘ri chaqirish
    prices: [
      { size: "0.5L", price: 7000 },
      { size: "1L", price: 14000 },
    ],
  },
  {
    category: "Drinks",
    name: "Fanta",
    image: "/fanta.png",   // ✅ boshqa rasmlar ham shu usulda
    prices: [
      { size: "0.5L", price: 8000 },
      { size: "1L", price: 15000 },
    ],
  },
  {
    category: "Drinks",
    name: "Cola",
    image: "/cola.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Drinks",
    name: "Sprite",
    image: "/sprite.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Drinks",
    name: "Moxitto",
    image: "/moxitto.png",
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 },
    ],
  },
  {
    category: "Sweets",
    name: "Raspberry Cheesecake",
    image: "/cheesecake-strawberry.png",
    prices: [
      { size: "slice", price: 12000 },
      { size: "whole", price: 70000 },
    ],
  },
  {
    category: "Sweets",
    name: "Lotus",
    image: "/lotus.png",
    prices: [
      { size: "1 pcs", price: 5000 },
      { size: "6 pcs", price: 28000 },
    ],
  },
];
export default data;
