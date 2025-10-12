import React from "react";

const Card = ({img,name,price,category,description}) => {
  return (
    <>
      <div >
        <img src={"https://imgs.search.brave.com/ie6D9hhne3NTMzfnt0hLCrdWaI-m0zl0lqWgkYFkC08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mYWxhYmVsbGEu/Y29tL2ZhbGFiZWxs/YUNMLzE2OTA3MTE4/XzEvd2lkdGg9MjQw/LGhlaWdodD0yNDAs/cXVhbGl0eT03MCxm/b3JtYXQ9d2VicCxm/aXQ9cGFk"} alt="" />
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{category}</p>
        <p>{description}</p>
       
      </div>
    </>
  );
};

export default Card;
