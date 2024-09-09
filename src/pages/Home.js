import Slider from 'react-slick';
import CounterItem from './counter';
import PricingPackage from '../components/pricing-package';
import Testimonial from '../components/testimonial';
import LastestProject from '../components/lastest-project';
import ContactUS from '../components/contact-us';
import Statistics from '../components/statistic';
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
                        <div className="col-lg-8">
                            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">TICOR Print Solutions</span>
                                <h1 className='title-hero'>Bem-vindo à TICOR, sua parceira em soluções de impressão.</h1>
                                <p className='white'>Oferecemos serviços personalizados e produtos de alta qualidade, adira e descubra como podemos ajudá-lo a destacar sua marca.</p>
                                <ul className="list-style-one pt-10 wow fadeInUp delay-0-3s">
                                    <li>Quality Services Provider</li>
                                    <li>Printing, Designing and Transportation</li>
                                </ul>
                                <div className="hero-btns pt-25 wow fadeInUp delay-0-4s">
                                    <a href="team.html" className="theme-btn">Talk With Us <i className="far fa-long-arrow-right"></i></a>
                                    <a href="contact.html" className="theme-btn style-three">Latest Projects <i className="far fa-long-arrow-right"></i></a>
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
                        <span className="sub-title mb-10">Nosso Trabalho</span>
                        <h2>Veja alguns exemplos dos nossos projetos recentes<br></br> e inspire-se para o seu próximo pedido.</h2>
                    </div>

                    <div className="what-we-provide-slider">
                        <Slider {...settings} className="what-we-provide-active">
                            <div className="what-we-provide-item wow fadeInUp delay-0-2s">
                                <i className="flaticon-t-shirt"></i>
                                <h6><a href="service-details.html">T-Shirt Print</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-3s">
                                <i className="flaticon-logo"></i>
                                <h6><a href="service-details.html">Logo Design</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-4s">
                                <i className="flaticon-banner"></i>
                                <h6><a href="service-details.html">Banner Print</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-5s">
                                <i className="flaticon-reading-book"></i>
                                <h6><a href="service-details.html">Books Print</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-6s">
                                <i className="flaticon-debit-card"></i>
                                <h6><a href="service-details.html">Card Print</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-7s">
                                <i className="flaticon-award"></i>
                                <h6><a href="service-details.html">Trophy Print</a></h6>
                            </div>
                            <div className="what-we-provide-item wow fadeInUp delay-0-8s">
                                <i className="flaticon-banner"></i>
                                <h6><a href="service-details.html">Banner Print</a></h6>
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
                                    <h2>Somos uma Empresa de soluções de Impressão Baseada em Moçambique.</h2>
                                </div>
                                {/*<div className="experience-year mb-20">
                                    <h6>We Have More then</h6>
                                    <span className="number">25</span>
                                    <h6>Years Of Experience in Printing Services</h6>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo voluptatem quia voluptas</p>
                                */}<div className="about-btns pt-5">
                                    <a href="about.html" className="theme-btn mt-20">Learn More <i className="far fa-long-arrow-right"></i></a>
                                    <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe about-video-play mt-20"><i className="fas fa-play"></i> <span>How IT Works</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area rel z-1">
                <div className="container-fluid">
                    <div className="services-inner text-white bgc-black">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-7">
                                <div className="service-content rel p-100 py-130 rpb-100 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-30">
                                        <span className="sub-title mb-15">Latest Services</span>
                                        <h2>Awesome Service For Printing and Design</h2>
                                    </div>
                                    <h6>Awards Winning Printing Company</h6>
                                    <p>Take a trivial example which of ever untakes laborious physical exercise except</p>
                                    <a href="services.html" className="theme-btn hover-two mt-20">Learn More <i className="far fa-long-arrow-right"></i></a>
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
                                                <i className="flaticon-print"></i>
                                            </div>
                                            <h3><a href="service-details.html">Impressão Digital</a></h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                                            <a href="service-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInDown delay-0-4s">
                                            <div className="icon">
                                                <i className="flaticon-3d-printer"></i>
                                            </div>
                                            <h3><a href="service-details.html">Serigrafia para T-Shirts</a></h3>
                                            <p>On the other hand, we denounce with rigteous indignation and dislike demoralized</p>
                                            <a href="service-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="icon">
                                                <i className="flaticon-print-1"></i>
                                            </div>
                                            <h3><a href="service-details.html">Impressão Offset</a></h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                                            <a href="service-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="service-item wow fadeInUp delay-0-6s">
                                            <div className="icon">
                                                <i className="flaticon-focus"></i>
                                            </div>
                                            <h3><a href="service-details.html">Sublimação</a></h3>
                                            <p>On the other hand, we denounce with rigteous indignation and dislike demoralized</p>
                                            <a href="service-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
                                            <div className="bg-image" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Statistics/>


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

            <section className="blog-area z-1 rel bgc-lighter pt-120 pb-100">
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
                                        <a className="name" href="#">Somalia</a>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <a href="#">Jule 24, 2022</a></span>
                                    <h4><a href="blog-details.html">Smashing Podcast Episode With Vitaly Friedman Jay</a></h4>
                                    <a href="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
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
                                        <a className="name" href="#">Somalia</a>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <a href="#">Jule 24, 2022</a></span>
                                    <h4><a href="blog-details.html">Rethinking Server-Timing As A Monitoring Tool</a></h4>
                                    <a href="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
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
                                        <a className="name" href="#">Somalia</a>
                                    </div>
                                    <span className="date"><i className="far fa-calendar-alt"></i> <a href="#">Jule 24, 2022</a></span>
                                    <h4><a href="blog-details.html">Modern Way To Create And See Host WordPress</a></h4>
                                    <a href="blog-details.html" className="read-more">Read More <i className="far fa-long-arrow-right"></i></a>
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
            </section>
            {/*<!-- Blog Area end -->*/}


        </>
    )
}