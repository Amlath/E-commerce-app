import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";

function ProductList() {
  const [productList , setProductList] = useState([]);

  function loadProducts(){
    fetch('https://fakestoreapi.com/products').then((response) => {
      response.json().then((data) => {
        setProductList(data);
      })
    })
  }
  
  useEffect(() => {
    loadProducts();
  },[productList])
  
  return ( 
    <div class="row row-cols-1 row-cols-md-5 g-4 mt-3">
      {
        productList.map((p) => {
            return <ProductCard product = {p} />
        })
      }
    </div>
  );
}

export default ProductList;