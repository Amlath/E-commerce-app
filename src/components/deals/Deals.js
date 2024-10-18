import '../../styles/Deals.css';

function Deals(props) {  
  const product = props.products;

  return (     
    <div className="col">
      <div className="card">
        <img src={product.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title title-color">{product.title}</h5>
          <p className="card-text desc-color">{product.category}</p>
          <p className="card-text desc-color">{product.price}$</p>
        </div>
      </div>
    </div>
   );
}

export default Deals;