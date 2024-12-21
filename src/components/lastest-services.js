import { Link } from "react-router-dom";
import Slider from "react-slick";

export default  function LastestService(){

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
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

    return(
        <>
             <div className="services-area rel z-1">
                <div className="container-fluid">
                    <div className="services-inner text-white bgc-black">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-7">
                                <div className="service-content rel p-100 py-130 rpb-100 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-30 section-dot">
                                       {/*  <span className="sub-title mb-15">Latest Services</span> */}
                                        <Slider {...settings}>
                                            <div>
                                                <h2 className="">Transforme Suas Ideias em Realidade com Impressão Digital!</h2>
                                            </div>

                                            <div>
                                                <h2 className="">Grandes Projetos Merecem Grande Qualidade!</h2>
                                            </div>

                                            <div>
                                                <h2 className="">Personalize com Estilo – Experimente a Sublimação!!</h2>
                                            </div>
                                            <div>
                                                <h2 className="">Versatilidade e Durabilidade com Serigrafia!</h2>
                                            </div>
                                           

                                        </Slider>
                                    </div>
                                   {/*  <h6>Awards Winning Printing Company</h6>
                                    <p>Take a trivial example which of ever untakes laborious physical exercise except</p> */}
                                    {/* <Link to="services.html" className="theme-btn hover-two mt-20">Ler mais<i className="far fa-long-arrow-right"></i></Link> */}
                                    <div className="circle-shapes no-animation">
                                        <div className="shape-inner">
                                            <span className="dot-one"></span>
                                            <span className="dot-two"></span>
                                            <span className="dot-three"></span>
                                            <span className="dot-four"></span>
                                            <span className="dot-five"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="row no-gap">
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInDown delay-0-4s">
                                            <div className="icon">
                                                {/* <i className="flaticon-print"></i> */}
                                                <img src="./img/digital.png"/>
                                            </div>
                                            <h3><Link to="/services">Impressão Digital</Link></h3>
                                            <p>É ideal para trabalhos de pequenas tiragens e alta personalização.</p>
                                            <Link to="/services" className="read-more">Ler mais <i className="far fa-long-arrow-right"></i></Link>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInDown delay-0-4s">
                                            <div className="icon">
                                                {/* <i className="flaticon-3d-printer"></i> */}
                                                
                                                <img src="./img/tshirt-print.png"/>
                                            </div>
                                            <h3><Link to="/services">Serigrafia para T-Shirts</Link></h3>
                                            <p>É versátil para imprimir em materiais diversos e em grandes volumes.</p>
                                            <Link to="/services" className="read-more">Ler mais <i className="far fa-long-arrow-right"></i></Link>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="icon">
                                              {/*   <i className="flaticon-print-1"></i> */}
                                           
                                              <img src="./img/offset-color.png"/>
                                            </div>
                                            <h3><Link to="/services">Impressão Offset</Link></h3>
                                            <p>É mais adequada para grandes tiragens e trabalhos de alta qualidade.</p>
                                            <Link to="/services" className="read-more">Ler mais <i className="far fa-long-arrow-right"></i></Link>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="icon">
                                                {/* <i className="flaticon-focus"></i> */}
                                                <img src="./img/sublimacao.png"/>
                                                
                                            </div>
                                            <h3><Link to="/services">Sublimação</Link></h3>
                                            <p>É ideal para personalização em tecidos e outros materiais revestidos.</p>
                                            <Link to="/services" className="read-more">Ler mais <i className="far fa-long-arrow-right"></i></Link>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}