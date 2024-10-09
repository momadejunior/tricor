import { useEffect, useState } from "react";
import ContactUS from "../components/contact-us";
import Statistics from "../components/statistic";
import Testimonial from "../components/testimonial";
import CounterItem from "./counter";

export default function About() {
  const [aboutData, setAboutData] = useState({
    titulo: "",
    descricao: "",
    missao: "",
    visao: "",
  });

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";
  const query = `query SobreNos {
    sobreNos {
      titulo
      descricao
      missao
      visao
    }
  }`;

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const result = data?.data?.sobreNos?.[0];
        if (result) {
          setAboutData(result);
        }
      });
  }, []);

  const { titulo, descricao, missao, visao } = aboutData;

  return (
    <>
      <section
        className="page-banner bgs-cover text-white pt-65 pb-75"
        style={{ backgroundImage: 'url(assets/images/sobre.png)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <h2 className="page-title wow fadeInUp delay-0-2s">
              Sobre Nós
            </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Sobre Nós</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="about-page-area py-130 rpt-120 rel z-1">
        <div className="container">
          <div className="row large-gap justify-content-between">
            <div className="col-lg-6">
              <div className="about-page-content rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-15">Sobre Nós</span>
                  <h2>{titulo}</h2>
                </div>
                <p>{descricao}</p>
                <div className="about-btns pt-5">
                  <a href="about.html" className="theme-btn mt-20">
                    Learn More <i className="far fa-long-arrow-right" />
                  </a>
                  <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe about-video-play mt-20">
                    <i className="fas fa-play" /> <span>How IT Works</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission-vision-part">
                <div className="mission-vision-item wow fadeInUp delay-0-4s">
                  <div className="progress-content one">
                    <i className="flaticon-target" />
                  </div>
                  <div className="content">
                    <h4>Visão</h4>
                    <p>{visao}</p>
                  </div>
                </div>
                <div className="mission-vision-item wow fadeInUp delay-0-6s">
                  <div className="progress-content two">
                    <i className="flaticon-mission" />
                  </div>
                  <div className="content">
                    <h4>Missão</h4>
                    <p>{missao}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <ContactUS />
    </>
  );
}
