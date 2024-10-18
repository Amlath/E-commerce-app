import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import '../../styles/ProductDetail.css';
import CartContext from '../../contexts/CartContext';

function ProductDetail(props) {
  
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.productId;
  const [productDetail, setProductDetail] = useState([]);
  const { saveToCart } = useContext(CartContext);

  function loadProductsById(){
    fetch('https://fakestoreapi.com/products/' + productId).then((response) => {
      response.json().then((data) => {
        setProductDetail(data);
      })
    })
  }

  useEffect(() => {
    loadProductsById();
  },[productId]);
  
  return (
    <div class="mt-3 container-fluid main-container">
      <div class="">
        <div class="p-3">
          <img src={productDetail.image} height={350} width={300} alt="..."/>
            <div class="card-body text-center mt-3">
              <h5 class="card-title mb-1 title">{productDetail.title}</h5>
              <p class="card-text desc">{productDetail.category}</p>
              <p class="card-text desc">{productDetail.description}</p>
              <p class="card-text desc">{productDetail.price}$</p>
            </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button onClick={() => {
            saveToCart(productDetail);
          }} class="btn addtocart-btn" type="button">ADD TO CART</button>
          <button onClick={() => {navigate(-1)}} class="btn btn-outline-* goback-btn" type="button">GO BACK</button>
        </div>
      </div>
    </div>
   );
}

export default ProductDetail;