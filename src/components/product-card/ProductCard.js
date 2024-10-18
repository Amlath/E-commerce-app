import ProductDetail from "../product-detail/ProductDetail";
import '../../styles/ProductCard.css';
import { Link } from "react-router-dom";

function ProductCard(props) {
  const product = props.product;

  return (
    <>
      <Link to={"/products/" + product.id} className="link-underline link-underline-opacity-0">
        <div class="col">
          <div class="card p-3">
            <img src={product.image} class="card-img-top" alt="..." height={250} width={50}/>
            <div class="card-body text-center">
              <h5 class="card-title heading-color">{product.title}</h5>
              <p class="card-text price-color">{product.price}$</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;