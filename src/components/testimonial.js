import Slider from 'react-slick';



export default function Testimonial(){

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


    return(
        <>
               <section className="testimonials-area pt-130">
                <div className="container rel">
                    <div className="row justify-content-between pb-35">
                        <div className="col-lg-12">
                            <div className="section-title mb-20 wow fadeInRight delay-0-2s">
                                <span className="sub-title mb-10">Our Testimonials</span>
                                <h2>What Our Clients Say About Services</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="">
                       <Slider {...settings}>
                            <div>
                                <div className='text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                   <div className='testimonial-card'>
                                   <h3 >Alfredo Guambe</h3>
                                   <p>Sit amet consectetur adipiscing elit, sed do eiusmod temp didunt ut labore dolore magna aliqua spsum suspendis facilisis.</p>
                                   </div>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Alfredo Guambe</h3>
                                <p>Sit amet consectetur adipiscing elit, sed do eiusmod temp didunt ut labore dolore magna aliqua spsum suspendis facilisis.</p>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Alfredo Guambe</h3>
                                <p>Sit amet consectetur adipiscing elit, sed do eiusmod temp didunt ut labore dolore magna aliqua spsum suspendis facilisis.</p>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Alfredo Guambe</h3>
                                <p>Sit amet consectetur adipiscing elit, sed do eiusmod temp didunt ut labore dolore magna aliqua spsum suspendis facilisis.</p>
                                </div>
                            </div>
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
    )
}