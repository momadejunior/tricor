import { useEffect, useState } from 'react';
import Slider from 'react-slick';

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
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

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";
  const query = `
    query Testemonial {
      testemunhos {
        id
        logotipo {
          url
        }
        nomeDaTestemunha
        testemunho
      }
    }
  `;

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then(data => {

     
        setTestimonials(data.data.testemunhos);

        console.log(testimonials)
      })
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <>
      <section className="testimonials-area pt-130">
        <div className="container rel">
          <div className="row justify-content-between pb-35">
            <div className="col-lg-12">
              <div className="section-title mb-20 wow fadeInRight delay-0-2s">
                <span className="sub-title mb-10">Leia o que os nossos clientes têm a dizer</span>
                <h2>Sobre a sua experiência connosco</h2>
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id}>
                  <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                    <h3>{testimonial.nomeDaTestemunha}</h3>
                    <p>{testimonial.testemunho}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="circle-shapes">
            <div className="shape-inner">
              <span className="dot-one"></span>
              <span className="dot-two"></span>
              <span className="dot-three"></span>
              <span className="dot-four"></span>
              <span className="dot-five"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
