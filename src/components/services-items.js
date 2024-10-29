import { useEffect, useState } from 'react';

export default function ServicesItem() {
  const [services, setServices] = useState([]);

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";

  const query = `
    query ServicosDeImpressao {
      servicosDeImpressaos {
        id
        tituloDoServico
        tiposDeServicos
        imagemDoServico {
          id
          url
        }
      }
    }
  `;

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
        setServices(data.data.servicosDeImpressaos); // Store fetched services in state
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <section className="services-area-two pt-120 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">Serviços</span>
              <h2>Serviços de Impressão</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img 
                    className="service-items" 
                    src={service.imagemDoServico?.url || "./img/default-icon.png"} 
                    alt={service.tituloDoServico} 
                  />
                </div>
                <div className="content">
                  <h3><a href="service-details.html">{service.tituloDoServico}</a></h3>
                  <ul>
                    {service.tiposDeServicos.map((tipo, index) => (
                      <li key={index}>{tipo}</li>
                    ))}
                  </ul>
                  <a href="service-details.html" className="read-more">
                    Ler mais <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
