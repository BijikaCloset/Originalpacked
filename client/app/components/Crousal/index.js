import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Crousal = ({ image }) => {
  return (
    <div>
      {/* <Carousel>
        {image.map((item) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel> */}
      <Carousel>
        {image.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100 imgstyle"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          {image.map((item) => (
            <div class="carousel-item active">
              {console.log(item)}
              <img className="d-block w-100" src={item} alt="First slide" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Crousal;
