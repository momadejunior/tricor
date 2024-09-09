import ContactUS from "../components/contact-us";
import Statistics from "../components/statistic";
import Testimonial from "../components/testimonial";
import CounterItem from "./counter";

export default function About(){
    return(
        <>
        
  <section className="page-banner bgs-cover text-white pt-65 pb-75" style={{backgroundImage: 'url(assets/images/banner.jpg)'}}>
    <div className="container">
      <div className="banner-inner">
        <h2 className="page-title wow fadeInUp delay-0-2s">
          Sobre Nós
        </h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb wow fadeInUp delay-0-4s">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">
              Sobre Nós
            </li>
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
              <h2>Somos uma Empresa de soluções de 
                Impressão Baseada em Moçambique.
              </h2>
            </div>
            <p>Na TICOR, temos o compromisso de oferecer soluções de impressão inovadoras e personalizadas. Profissionais com anos de experiência no setor, nossa equipa dedicada trabalha para garantir a máxima satisfação dos nossos clientes, desde pequenas empresas até grandes corporações.</p>
            <div className="about-btns pt-5">
              <a href="about.html" className="theme-btn mt-20">Learn More <i className="far fa-long-arrow-right" /></a>
              <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe about-video-play mt-20"><i className="fas fa-play" /> <span>How IT Works</span></a>
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
                <h4>Our Mission</h4>
                <p>Denounce with righteous indign and dislike men beguiled</p>
              </div>
            </div>
            <div className="mission-vision-item wow fadeInUp delay-0-6s">
              <div className="progress-content two">
                <i className="flaticon-mission" />
              </div>
              <div className="content">
                <h4>Our Vision</h4>
                <p>Denounce with righteous indign and dislike men beguiled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="video-fact-counter bgc-lighter" style={{backgroundImage: 'url(assets/images/about/about-counter-bg.png)'}}>
    <div className="container">
      <div className="about-video about-page-video">
        <img src="assets/images/about/about-page-video.jpg" alt="About" />
        <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play"><i className="fas fa-play" /></a>
      </div>

      <Statistics/>
      
    </div>
    <div className="circle-shapes">
      <div className="shape-inner">
        <span className="dot-one" />
        <span className="dot-two" />
        <span className="dot-three" />
        <span className="dot-four" />
        <span className="dot-five" />
      </div>
    </div>
  </div>


 {/*Our team*/}


 {/*end here*/}


  <div className="why-choose-three pt-120 pb-100 rel z-1 bgc-black text-white">
    <div className="container">
      <div className="services-inner ">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title mb-15">Why Choose us</span>
              <h2>Amazing Features For Printing Design and Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="service-item style-three wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-network" /> 
              </div>
              <h5><a href="service-details.html">Experience Team</a></h5>
              <p>On the other hand denou rigteous indignation</p>
              <div className="bg-image" style={{backgroundImage: 'url(assets/images/services/service-bg-three.jpg)'}} />
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item style-three wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon-air-plane" />
              </div>
              <h5><a href="service-details.html">Full Free Transport</a></h5>
              <p>On the other hand denou rigteous indignation</p>
              <div className="bg-image" style={{backgroundImage: 'url(assets/images/services/service-bg-three.jpg)'}} />
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item style-three wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon-award" />
              </div>
              <h5><a href="service-details.html">Quality Services</a></h5>
              <p>On the other hand denou rigteous indignation</p>
              <div className="bg-image" style={{backgroundImage: 'url(assets/images/services/service-bg-three.jpg)'}} />
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="service-item style-three wow fadeInUp delay-0-8s">
              <div className="icon">
                <i className="flaticon-technical-support" />
              </div>
              <h5><a href="service-details.html">100% Return Policy</a></h5>
              <p>On the other hand denou rigteous indignation</p>
              <div className="bg-image" style={{backgroundImage: 'url(assets/images/services/service-bg-three.jpg)'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="circle-shapes">
      <div className="shape-inner">
        <span className="dot-one" />
        <span className="dot-two" />
        <span className="dot-three" />
        <span className="dot-four" />
        <span className="dot-five" />
      </div>
    </div>
  </div>




<Testimonial/>
<ContactUS/>


   
        </>
    )
}