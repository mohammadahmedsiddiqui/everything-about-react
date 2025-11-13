import {React , useEffect , useState} from 'react'
import Productcard from '../Productcard/Productcard';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const Productlist = () => {


     const [products, setProducts] = useState([])
async function fetchProducts() {
  const data= await fetch(`${API_BASE_URL}/api/products`);
  const products  = await data.json();
  console.log(products);
  setProducts(products)
}

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
   <>
   
  <div>
        <div className="flex flex-wrap justify-center mt-10">

  {
    products.map((item, index)=>(
      <Productcard key={index} productname={item.productname} price={item.price} description={item.description} image={item.image} />
    ))
  }
  
</div>

</div>
   
   </>
  )
}

export default Productlist
