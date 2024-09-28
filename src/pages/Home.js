import Slider from 'react-slick';
import CounterItem from './counter';
import PricingPackage from '../components/pricing-package';
import Testimonial from '../components/testimonial';
import LastestProject from '../components/lastest-project';
import ContactUS from '../components/contact-us';
import Statistics from '../components/statistic';
import LastestService from '../components/lastest-services';
import { Link } from 'react-router-dom';
export default function Home() {


    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 6,
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


    return (
        <>
            {/*<!-- hero Area start -->*/}

            <div className="hero-area pt-145 pb-75 rel z-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">

                                <h1 className='title-hero'>Bem-vindo à TICOR, sua parceira em soluções de impressão.</h1>
                                <p className='white'>Oferecemos serviços personalizados e produtos de alta qualidade, adira e descubra como podemos ajudá-lo a destacar sua marca.</p>
                                
                                <div className="hero-btns pt-25 wow fadeInUp delay-0-4s">
                                    <Link to="team.html" className="theme-btn">SOLICITA ORCAMENTO<i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="hero-images wow fadeInLeft delay-0-2s">
                                <img className="w-100" src="assets/images/hero/hero-right.jpg" alt="Hero Image" />
                                <img className="image-one wow fadeInRight delay-0-6s" src="assets/images/hero/hero-1.png" alt="Hero Image" />
                                <img className="image-two wow fadeInDown delay-0-8s" src="assets/images/hero/hero-2.png" alt="Hero Image" />
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
                        </div>*/}
                    </div>
                </div>
            </div>


            <section className="what-we-provide bgc-lighter pt-75 pb-80">
                <div className="container">
                    <div className="section-title text-center mb-20 wow fadeInUp delay-0-2s">
                        <span className="sub-title mb-10">7% de descontos para pedidos pelo site</span>
                        <h2>O que vai imprimir hoje?</h2>
                    </div>

                    <div className="what-we-provide-slider">
                        <Slider {...settings} className="what-we-provide-active">
                            <div className="what-we-provide-item wow fadeInUp delay-0-2s">
                                <img src="./img/01.png" className="flaticon-t-shirt"/>
                                <h6><Link to="/services">Chaveiro</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-3s">
                                <img src="./img/notebook.png"/>
                                <h6><Link to="/services">Bloco de Notas</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-4s">
                            <img src="./img/roll_up.png"/>
                                <h6><Link to="/services">Roll Up</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-5s">
                            <img src="./img/livro.png"/>
                                <h6><Link to="/services">Livro</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-6s">
                            <img src="./img/tshirt.png"/>
                                <h6><Link to="/services">T-shirt</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-7s">
                            <img src="./img/pen.png"/>
                                <h6><Link to="/services">Caneta</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/banner.png"/>
                                <h6><Link to="/services">Banner</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/cap.png"/>
                                <h6><Link to="/services">Chapeu</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/caixa.png"/>
                                <h6><Link to="/services">Caixa</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/livreto.png"/>
                                <h6><Link to="/services">Livreto</Link></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/mug.png"/>
                                <h6><Link to="/services">Chavena</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/magazine.png"/>
                                <h6><Link to="/services">Revista</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/menus.png"/>
                                <h6><Link to="/services">Menus</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/stamp.png"/>
                                <h6><Link to="/services">Carimbo</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/sacola.png"/>
                                <h6><Link to="/services">Sacola</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/bebedouro.png"/>
                                <h6><Link to="/services">Bebedouro</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/recibo.png"/>
                                <h6><Link to="/services">Recibo</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/polo_tshirt.png"/>
                                <h6><Link to="/services">Polo T-shirt</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/sacola_02.png"/>
                                <h6><Link to="/services">Sacola</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/caixa_02.png"/>
                                <h6><Link to="/services">Caixa</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/flashdisk.png"/>
                                <h6><Link to="/services">Flash</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/letterhead.png"/>
                                <h6><Link to="/services">Papel Timbrado</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/envelope.png"/>
                                <h6><Link to="/services">Envelope</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/door-hanger.png"/>
                                <h6><Link to="/services">Cabide de Porta</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/brochure.png"/>
                                <h6><Link to="/services">Brochura</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/saco_plasticos.png"/>
                                <h6><Link to="/services">Saco Plastico</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/calendario.png"/>
                                <h6><Link to="/services">Calendario</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/umbrela.png"/>
                                <h6><Link to="/services">Guarda-Chuva</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/chaveiro_02.png"/>
                                <h6><Link to="/services">Chaveiro</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/flyers.png"/>
                                <h6><Link to="/services">Flyers</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/hatchback.png"/>
                                <h6><Link to="/services">Hatchback</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/glass.png"/>
                                <h6><Link to="/services">Garrafa</Link></h6>
                            </div>

                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                            <img src="./img/photos.png"/>
                                <h6><Link to="/services">Fotos</Link></h6>
                            </div>
                        </Slider>
                    </div>


                </div>
            </section>

            <div className="about-area py-130 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-images rmb-65">
                                <div className="row align-items-end justify-content-center">
                                    <img src="./assets/images/Imagens/photos/interracial.jpg" alt="About" />
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
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content wow fadeInUp delay-0-2s">
                                <div className="section-title mb-20">
                                    <span className="sub-title mb-15">Sobre Nós</span>
                                    <p className="grey-ticor">somos a ticor, uma empresa mocambicana especializada em solucoes de impressao inovadors e personalizadas, dedicada a atender com excelencia desde pequenas empresas ate grandes corporacoes</p>
                                </div>
                                {/*<div className="experience-year mb-20">
                                    <h6>We Have More then</h6>
                                    <span className="number">25</span>
                                    <h6>Years Of Experience in Printing Services</h6>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo voluptatem quia voluptas</p>
                                */}<div className="about-btns pt-5">
                                    <Link to="about.html" className="theme-btn mt-20">Ler mais<i className="far fa-long-arrow-right"></i></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/*Lastest Service*/}

           <LastestService/>

        {/*Lastest Service*/}

{/*Lastest Project here*
            <LastestProject/>
Lastest Project here*/}


          {/*Contact Us Here*/}
          <ContactUS/>
        {/*Contact Us Here*/}




            {/*Testimonial section inside here*/}

            <Testimonial />
            {/*Testimonial section ends here*/}




            {/*Pricing package*/}
            <PricingPackage />
            {/*Ends Here Package*/}

            {/* <section className="blog-area z-1 rel bgc-lighter pt-120 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-10">Latest News & Blog</span>
                                <h2>Get Every Single Updates Latest News & Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-item wow fadeInUp delay-0-2s">
                                <div className="image">
                                    <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                                </div>
                                <div className="content">
                                    <div className="author">
                                        <img src="assets/images/blog/author.jpg" alt="Author" />
                                        <Link className="name" to="#">Somalia</Link>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <Link to="#">Jule 24, 2022</Link></span>
                                    <h4><Link to="blog-details.html">Smashing Podcast Episode With Vitaly Friedman Jay</Link></h4>
                                    <Link to="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 order-xl-3">
                            <div className="blog-item wow fadeInUp delay-0-6s">
                                <div className="image">
                                    <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                                </div>
                                <div className="content">
                                    <div className="author">
                                        <img src="assets/images/blog/author.jpg" alt="Author" />
                                        <Link className="name" to="#">Somalia</Link>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <Link to="#">Jule 24, 2022</Link></span>
                                    <h4><Link to="blog-details.html">Rethinking Server-Timing As A Monitoring Tool</Link></h4>
                                    <Link to="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-item active wow fadeInUp delay-0-4s">
                                <div className="image">
                                    <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                                </div>
                                <div className="content">
                                    <div className="author">
                                        <img src="assets/images/blog/author.jpg" alt="Author" />
                                        <Link className="name" to="#">Somalia</Link>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <Link to="#">Jule 24, 2022</Link></span>
                                    <h4><Link to="blog-details.html">Modern Way To Create And See Host WordPress</Link></h4>
                                    <Link to="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </section> */}
            {/*<!-- Blog Area end -->*/}


        </>
    )
}