import banner_image from './images/banner-image.webp';
import banner_image2 from './images/banner-image2.jpg';
import banner_image3 from './images/banner-image3.jpg'

function Banner() {
  return ( 
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner_image} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner_image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner_image3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   );
}

export default Banner;