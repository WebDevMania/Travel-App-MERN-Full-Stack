import apartment from "../assets/apartment.jpg"
import villa from "../assets/villa.jpg"
import penthouse from "../assets/penthouse.jpg"
import bungalow from "../assets/bungalow.jpg"

import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"


export const typeData = [
  {type: 'apartment', number: 20, img: apartment},
  {type: 'villa', number: 45, img: villa},
  {type: 'penthouse', number: 120, img: penthouse},
  {type: 'bungalow', number: 64, img: bungalow},
]


export const suggestedPlacesData = [
  {
    title: "Bora Bora",
    type: 'villa',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4,
    price: 80,
    country: "Indonesia",
    img: img2,
    id: crypto.randomUUID(),
  },
  {
    title: "Maldives",
    type: 'villa',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 3.7,
    price: 50,
    country: "Maldives",
    img: img3,
    id: crypto.randomUUID(),
  },
  {
    title: "Victoria",
    type: 'penthouse',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4.3,
    price: 150,
    country: "Seychelles",
    img: img4,
    id: crypto.randomUUID(),
  },
  {
    title: "Azores",
    type: 'apartment',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4,
    price: 80,
    country: "Portugal",
    img: img5,
    id: crypto.randomUUID(),
  },
  {
    title: "Singapore",
    type: 'apartment',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4,
    price: 80,
    country: "Singapore",
    img: img6,
    id: crypto.randomUUID(),
  },
  {
    title: "Oslo",
    type: 'penthouse',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4,
    price: 80,
    country: "Norway",
    img: img7,
    id: crypto.randomUUID(),
  },
  {
    title: "Ko Samui",
    type: 'villa',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4,
    price: 80,
    country: "Thailand",
    img: img8,
    id: crypto.randomUUID(),
  },
  {
    title: "Dubai",
    type: 'bungalow',
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, illum saepe et sapiente, atque velit vero iste quod earum blanditiis consequuntur laborum qui incidunt error. Impedit, velit. Natus, debitis accusantium!",
    review: 4.5,
    price: 125,
    country: "UAE",
    img: img9,
    id: crypto.randomUUID(),
  },
]
