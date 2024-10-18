import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import '../../styles/Cart.css';

function Cart() {
  
  const { cartItem } = useContext(CartContext);

  return (
    <div className="card mb-3 customized mt-5 ms-3 p-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={cartItem.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 mt-5">
          <div className="card-body">
            <h5 className="card-title title">{cartItem.title}</h5>
            <p className="card-text desc">{cartItem.category}</p>
            <p className="card-text desc"><small className="text-body-secondary">{cartItem.price}$</small></p>
          </div>
          <div>
            <button className="btn remove-btn">Remove Item</button>            
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Cart;  