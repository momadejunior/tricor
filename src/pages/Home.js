import Slider from 'react-slick';
import CounterItem from './counter';
import PricingPackage from '../components/pricing-package';
import Testimonial from '../components/testimonial';
import LastestProject from '../components/lastest-project';
import ContactUS from '../components/contact-us';
import Statistics from '../components/statistic';
import LastestService from '../components/lastest-services';
import { Link } from 'react-router-dom';
import SliderServices from '../components/slider-service';
import HeroSection from '../components/heroSection';


export default function Home() {

    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return <div className={`${className} custom-next`} onClick={onClick}><img src="./img/arrow-right.png" className="arrow-img"/></div>;
    };
    
    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return <div className={`${className} custom-prev`} onClick={onClick}><img src="./img/arrow-left.png" className="arrow-img"/></div>;
    };
    

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


    return (
        <>
            <HeroSection/>

         <SliderServices/>

            <div className="about-area py-130 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-images rmb-65">
                                <div className="row align-items-end justify-content-center">
                                    <img src="./img/interracial.jpg" alt="About" />
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
                                    <p className="grey-ticor">A TICOR é uma empresa de soluções de impressão com sede em Moçambique, empenhada em oferecer soluções inovadoras e personalizadas.</p>
                                </div>
                                {/*<div className="experience-year mb-20">
                                    <h6>We Have More then</h6>
                                    <span className="number">25</span>
                                    <h6>Years Of Experience in Printing Services</h6>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo voluptatem quia voluptas</p>
                                */}<div className="about-btns pt-5">
                                    <Link to="/about" className="theme-btn mt-20">Ler mais<i className="far fa-long-arrow-right"></i></Link>
                                    
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