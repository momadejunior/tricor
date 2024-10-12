import { useState, useEffect } from "react";
import Slider from "react-slick";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-next`} onClick={onClick}>
      <img src="/img/arrow-right.png" className="arrow-img" alt="next arrow" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev`} onClick={onClick}>
      <img src="/img/arrow-left.png" className="arrow-img" alt="prev arrow" />
    </div>
  );
};

export default function Partners() {
  const [logos, setLogos] = useState([]); // State to store partner logos
  const [loading, setLoading] = useState(true); // State for loading

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master"; // Ensure the URL ends with /graphql

  const query = `query LogoDosParceiros {
    parceiros {
      logo {
        id
        url
      }
    }
  }`;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
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

  useEffect(() => {
    fetch(url, {
      method: "POST",
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
        setLogos(data.data.parceiros); // Update the state with fetched logos
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false); // Even in case of error, stop loading
      });
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div className="container partners">
      <h2 className="text-center color">Nossos Parceiros</h2>
      {loading ? (
        <p>Loading logos...</p>
      ) : logos.length === 0 ? (
        <p>No partner logos available</p>
      ) : (
        <div className="">
          <Slider {...settings}>
            {logos.map((partner) => (
              <div key={partner.logo.id} className="footer-project-item">
                <img src={partner.logo.url} style={{ width: "100%" }} alt="Partner Logo" />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
