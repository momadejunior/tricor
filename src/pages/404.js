export default function Error(){
    return(
        <>
              <section className="page-banner style-two text-center bgc-lighter pt-70 pb-75">
            <div className="container">
                <div className="banner-inner pt-20">
                    <h1 className="page-title wow fadeInUp delay-0-2s">404</h1>
                </div>
            </div>
        </section>
       
        <section className="error-page-area py-130">
            <div className="container">
                <div className="error-page-content text-center">
                    <div className="image mb-65 wow fadeInUp delay-0-2s">
                        <img src="assets/images/404.png" alt="404 Erro"/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-title wow fadeInUp delay-0-2s">
                                <h2><span>Opps!</span> This Page are Can’t Be Found</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaquey ipsa quae abillo inventore veritatis et quasie</p>
                            </div>
                        </div>
                    </div>
                    <a href="index.html" className="theme-btn mt-15 wow fadeInUp delay-0-2s">Go To Home <i className="far fa-long-arrow-right"></i></a>
                </div>
            </div>
        </section>
       
        <section className="cta-area bgc-gradient">
            <div className="row">
                <div className="col-xl-4">
                    <div className="cta-left-image rel z-1 wow fadeInLeft delay-0-4s">
                        <img src="assets/images/cta/cta-left.png" alt="CTA Left"/>
                        <div className="circle-shapes white-shape no-animation">
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
                <div className="col-xl-4 align-self-center">
                    <div className="cta-content text-white py-55 wow fadeInUp delay-0-2s">
                        <div className="section-title mb-35">
                            <span className="sub-title mb-10">Contact With Us</span>
                            <h2>Need Any Printig For your Business?</h2>
                        </div>
                        <a href="projects.html" className="theme-btn">Start Your Projects <i className="far fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="cta-right-image rel z-1 wow fadeInRight delay-0-2s">
                        <img src="assets/images/cta/cta-right.png" alt="CTA Right"/>
                        <div className="circle-shapes white-shape no-animation">
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
            </div>
        </section>
       
    
        </>
    )
}