export default function ContactUS(){
    return(
        <>
          <section className="cta-area bgc-gradient">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="cta-left-image rel z-1 wow fadeInLeft delay-0-4s">
                            <img src="assets/images/cta/cta-left.png" alt="CTA Left" />
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
                            <img src="assets/images/cta/cta-right.png" alt="CTA Right" />
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