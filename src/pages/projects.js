export default function Projects(){
    return(
        <>
        <section className="page-banner bgs-cover text-white pt-65 pb-75">
            <div className="container">
                <div className="banner-inner">
                    <h2 className="page-title wow fadeInUp delay-0-2s">Project</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Project</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        
        <section className="project-page-area rel z-1 pt-120 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                            <span className="sub-title mb-10">Our Latest Project</span>
                            <h2>We’ve Done Lot’s Of Project! Have a Look Our Recent Projects!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <ul className="project-filter mb-50 wow fadeInUp delay-0-4s">
                    <li data-filter="*" className="current">Show All</li>
                    <li data-filter=".tshirt">T-Shirt Printing</li>
                    <li data-filter=".logoo">Logo Design</li>
                    <li data-filter=".branding">Branding</li>
                    <li data-filter=".3dprint">3D Printing</li>
                    <li data-filter=".ofset">Ofset Printing</li>
                </ul>
                <div className="row project-two-active">
                    <div className="col-xl-3 col-lg-4 col-sm-6 item logoo 3dprint">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project1.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Business Card Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project1.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt branding ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project2.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">T-Shirt Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project2.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item logoo ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project3.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Business Card Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project3.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt branding">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project4.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Box Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project4.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item 3dprint ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project5.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Coffee Mug Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project5.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt branding">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project6.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Cover Shirt Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project6.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt 3dprint">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project7.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Business Card Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project7.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item branding ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project8.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">T-Shirt Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project8.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item logoo ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project9.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">T-Shirt Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project9.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt branding">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project10.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Banner Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project10.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item logoo 3dprint">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project11.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Flyer Card Printing</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project11.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 item tshirt branding ofset">
                        <div className="project-item-two">
                            <img src="assets/images/projects/project12.jpg" alt="Project"/>
                            <div className="project-content">
                                <div className="left-part">
                                    <h5><a href="project-details.html">Design & Branding</a></h5>
                                    <span>Design, Printing</span>
                                </div>
                                <a href="assets/images/projects/project12.jpg" className="plus"><i className="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
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
  

        <div className="footer-top pt-100">
            <div className="container">
                <div className="footer-top-projects">
                    <div className="footer-project-item wow fadeInUp delay-0-2s">
                        <img src="assets/images/footer/gallery1.jpg" alt="Gallery"/>
                        <div className="content">
                            <h6><a href="project-details.html">Card Printing</a></h6>
                        </div>
                    </div>
                    <div className="footer-project-item wow fadeInUp delay-0-3s">
                        <img src="assets/images/footer/gallery2.jpg" alt="Gallery"/>
                        <div className="content">
                            <h6><a href="project-details.html">Card Printing</a></h6>
                        </div>
                    </div>
                    <div className="footer-project-item wow fadeInUp delay-0-4s">
                        <img src="assets/images/footer/gallery3.jpg" alt="Gallery"/>
                        <div className="content">
                            <h6><a href="project-details.html">Card Printing</a></h6>
                        </div>
                    </div>
                    <div className="footer-project-item wow fadeInUp delay-0-5s">
                        <img src="assets/images/footer/gallery4.jpg" alt="Gallery"/>
                        <div className="content">
                            <h6><a href="project-details.html">Card Printing</a></h6>
                        </div>
                    </div>
                    <div className="footer-project-item wow fadeInUp delay-0-6s">
                        <img src="assets/images/footer/gallery5.jpg" alt="Gallery"/>
                        <div className="content">
                            <h6><a href="project-details.html">Card Printing</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}