import pepsi from "./assets/pepsi.png";
import fanta from "./assets/fanta.png";
import cola from "./assets/cola.png";
import sprite from "./assets/sprite.png";
import moxitto from "./assets/moxitto.png";
import cheesecake from "./assets/cheesecake-strawberry.png";
import lotus from "./assets/lotus.png";
import vafli from "./assets/vafli.png";
import pistachio from "./assets/pistachio.png";
import dubai from "./assets/dubai.png";
import sansebastian from "./assets/SanSebastian.png";

const data = [
  {
    category: "Drinks",
    name: "Pepsi",
    image: pepsi,
    prices: [
      { size: "0.5L", price: 7000 },
      { size: "1L", price: 14000 }
    ]
  },
  {
    category: "Drinks",
    name: "Fanta",
    image: fanta,
    prices: [
      { size: "0.5L", price: 8000 },
      { size: "1L", price: 15000 }
    ]
  },
  {
    category: "Drinks",
    name: "Cola",
    image: cola,
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 }
    ]
  },
  {
    category: "Drinks",
    name: "Sprite",
    image: sprite,
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 }
    ]
  },
  {
    category: "Drinks",
    name: "Moxitto",
    image: moxitto,
    prices: [
      { size: "0.5L", price: 7500 },
      { size: "1L", price: 14500 }
    ]
  },
  {
    category: "Sweets",
    name: "Raspberry Cheesecake",
    image: cheesecake,
    prices: [
      { size: "slice", price: 12000 },
      { size: "whole", price: 70000 }
    ]
  },
  {
    category: "Sweets",
    name: "Lotus",
    image: lotus,
    prices: [
      { size: "1 pcs", price: 5000 },
      { size: "6 pcs", price: 28000 }
    ]
  },
  {
    category: "Sweets",
    name: "Fruit Waffle",
    image: vafli,
    prices: [
      { size: "single", price: 10000 },
      { size: "double", price: 18000 }
    ]
  },
  {
    category: "Sweets",
    name: "Pistachio Cake",
    image: pistachio,
    prices: [
      { size: "single", price: 10000 },
      { size: "double", price: 18000 }
    ]
  },
  {
    category: "Sweets",
    name: "Dubai Cheesecake",
    image: dubai,
    prices: [
      { size: "single", price: 10000 },
      { size: "double", price: 18000 }
    ]
  },
  {
    category: "Sweets",
    name: "SanSebastian",
    image: sansebastian,
    prices: [
      { size: "single", price: 10000 },
      { size: "double", price: 18000 }
    ]
  }
];

export default data;
