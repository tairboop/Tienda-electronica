import { useContext } from "react";
import { dataContext } from "../cartContent/DataContext";
import "./style-products.css";

const Products = () => {
    const {data} = useContext(dataContext);
  return data.map((products)=>{
    return(
      <div className="card" key={products.id}>
        <img src={products.img} alt='img-product-card' />
        <h3>{products.name}</h3>
        <h4>{products.price}$</h4>
        <button>comprar</button>
      </div>
    )
  })
}

export default Products
