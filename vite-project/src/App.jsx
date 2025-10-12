import { useState } from 'react'
import Card from './components/card'

function App() {
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 1200,
    brand: "UrbanWear",
    size: ["S", "M", "L", "XL"],
    color: "White",
    stock: 25,
    image: "https://example.com/images/white-tshirt.jpg",
    description: "A soft and comfortable cotton t-shirt perfect for everyday wear."
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "Pants",
    price: 2800,
    brand: "DenimX",
    size: ["30", "32", "34", "36"],
    color: "Blue",
    stock: 15,
    image: "https://example.com/images/slimfit-jeans.jpg",
    description: "Stylish slim-fit jeans made from premium denim for a modern look."
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 5200,
    brand: "RunPro",
    size: [7, 8, 9, 10, 11],
    color: "Black & Red",
    stock: 10,
    image: "https://example.com/images/running-shoes.jpg",
    description: "Lightweight and durable running shoes designed for comfort and performance."
  },
  {
    id: 4,
    name: "Graphic Print Tee",
    category: "T-Shirts",
    price: 1500,
    brand: "StreetStyle",
    size: ["M", "L", "XL"],
    color: "Black",
    stock: 18,
    image: "https://example.com/images/graphic-tee.jpg",
    description: "Trendy graphic t-shirt for casual outings."
  },
  {
    id: 5,
    name: "Casual Chinos",
    category: "Pants",
    price: 2600,
    brand: "FlexFit",
    size: ["30", "32", "34", "36"],
    color: "Beige",
    stock: 12,
    image: "https://example.com/images/casual-chinos.jpg",
    description: "Comfortable cotton chinos for everyday wear or semi-formal events."
  },
  {
    id: 6,
    name: "High-Top Sneakers",
    category: "Shoes",
    price: 4800,
    brand: "KicksLab",
    size: [8, 9, 10, 11],
    color: "White",
    stock: 20,
    image: "https://example.com/images/high-top-sneakers.jpg",
    description: "Trendy high-top sneakers with a modern design and comfortable fit."
  }
];

  return (
  //  <>
  // {
  //   products.map(({id,name,category,price,brand,size,color,stock,description})=>{
  //    return(
  //       <ul key={id}>
  //         <li>{id}</li>
  //         <li>{name}</li>
  //         <li>{category}</li>
  //         <li>{price}</li>
  //         <li>{brand}</li>
  //         <li>{size.join(",")}</li>
  //         <li>{color}</li>
  //         <li>{stock}</li>
  //         <li>{description}</li>
  //       </ul>
  //    )
  //   })
  // }
  //  </>

  <>
  <Card
img={"https://imgs.search.brave.com/ie6D9hhne3NTMzfnt0hLCrdWaI-m0zl0lqWgkYFkC08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mYWxhYmVsbGEu/Y29tL2ZhbGFiZWxs/YUNMLzE2OTA3MTE4/XzEvd2lkdGg9MjQw/LGhlaWdodD0yNDAs/cXVhbGl0eT03MCxm/b3JtYXQ9d2VicCxm/aXQ9cGFk"}
name={"iphone"}
price={20000}
category={"mobile"}
description={"lorem"}
 />
  
  </>
  )
}

export default App
