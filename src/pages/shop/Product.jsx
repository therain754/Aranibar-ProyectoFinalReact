import {ShopContext} from "../../context/ShopContext";
import {useContext} from "react";

const Product = (props) => {
    const {id, name, price, productImage} = props.data;
    const {addToCart, cartItem} = useContext(ShopContext);

    const cartItemAmount = cartItem[id];

    return <div className='product'>
        <img src={productImage} alt=''></img>
        <div className='description'>
            <p>
                <b>{name}</b>
            </p>
            <p>{price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>
            Agregar al carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
  </div>
}

export default Product;