import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function SliderServices() {
  const [services, setServices] = useState([]);

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-next`} onClick={onClick}>
        <img src="./img/arrow-right.png" className="arrow-img" alt="next arrow" />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev`} onClick={onClick}>
        <img src="./img/arrow-left.png" className="arrow-img" alt="prev arrow" />
      </div>
    );
  };

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const query = `query SliderService {
  sliderServices(last: 100) {
    id
    imagemDoServico {
      url
    }
    descricaoDoServico
  }
}`;

  useEffect(() => {
    fetch(url, {
      method: "POST", // Use 'POST' for GraphQL queries
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.data.sliderServices);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
      <section className="what-we-provide bgc-lighter pt-75 pb-80">
        <div className="container">
          <div className="section-title text-center mb-20 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Seja nosso parceiro e ganha até 10% de desconto</span>
            <h2>O que vai imprimir hoje?</h2>
          </div>

          <div className="what-we-provide-slider">
            <Slider {...settings} className="what-we-provide-active">
              {services.map((item, index) => (
                <div key={index} className="what-we-provide-item wow fadeInUp delay-0-2s">
                  <img src={item.imagemDoServico.url} alt={item.descricaoDoServico} className="flaticon-t-shirt" />
                  <h6>
                    <Link to="/services">{item.descricaoDoServico}</Link>
                  </h6>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
