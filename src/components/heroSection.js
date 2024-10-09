import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";

  const query = `
    query HeroSection {
      landpages {
        titulo
        descricao
        imagem {
          id
          url
        }
      }
    }
  `;

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
        setHeroData(data.data.landpages[0]); // Set the first landpage entry
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      {/*<!-- hero Area start -->*/}

      <div className="hero-area pt-145 pb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                <h1 className="title-hero">{heroData ? heroData.titulo : "Loading..."}</h1>
                <p className="white">
                  {heroData ? heroData.descricao : "Loading description..."}
                </p>

                <div className="hero-btns pt-25 wow fadeInUp delay-0-4s">
                  <Link to="mailto:print@ticor.co.mz" className="theme-btn">
                    SOLICITAR ORCAMENTO
                    <i className="far fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInLeft delay-0-2s">
                <img
                  className="img-fluid"
                  src={heroData ? heroData.imagem.url : "./img/services.png"}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
