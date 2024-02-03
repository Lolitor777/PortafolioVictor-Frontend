
import { data } from "../../helpers/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Testimony = () => {

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    }

  return (
      <div className="testimony-container">
        <h3 className="testimony-paragraph">
          Las personas con las que he trabajado han plasmado sus buenas vibras
          aquí...
        </h3>
        <div className="testimony-container-child">
        <Slider {...settings} className="testimony-slider">
            {data.map((item) => (
              <div className="testimony-slider-child" key={item.id}>
                <div>
                <figure className="testimony-slider-image">
                  <img
                    className="testimony-slider-img"
                    src={item.photo}
                    alt=""
                  />
                </figure>
                <p className="testimony-slider-description">
                  {item.description}
                </p>
                <h4 className="tesimony-slider-name">{item.name}</h4>
                <h5 className="tesimony-slider-job">{item.job}</h5>
                </div>
              </div>
            ))}
        </Slider>
        </div>
      </div>
  );
};


