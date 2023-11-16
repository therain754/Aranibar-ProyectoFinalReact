import {PRODUCTS} from "../../products";
import './shop.css'
import Product from "./Product";

const Shop = () => {
  return <div className='shop'>
      <div className='shopTitle'>
          <h1> E-Commerce</h1>
      </div>
      <div className='products'>
          {PRODUCTS.map((product) => <Product data={product}/>)}
      </div>
  </div>
}

export default Shop;