export default function Contacts(){
    return(
        <>
            
        <section class="page-banner bgs-cover text-white pt-65 pb-75" >
            <div class="container">
                <div class="banner-inner">
                    <h2 class="page-title wow fadeInUp delay-0-2s">Contact Us</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb wow fadeInUp delay-0-4s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    
        <section class="contact-feature pt-130 pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="service-item-two style-two wow fadeInUp delay-0-2s">
                            <div class="icon">
                               <i class="flaticon-technical-support"></i> 
                            </div>
                            <div class="content">
                                <h4>Need Our Support</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="service-item-two style-two wow fadeInUp delay-0-2s">
                            <div class="icon">
                               <i class="flaticon-chat"></i> 
                            </div>
                            <div class="content">
                                <h4>Become a Member</h4>
                                <p>On the other hand denounce righteous ination and dislike men who are so beguiled</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="contact-info-area mb-130">
            <div class="container">
                <div class="row no-gap">
                    <div class="col-lg-6">
                        <div class="contact-info-content wow fadeInLeft delay-0-2s">
                            <div class="section-title mb-25">
                                <span class="sub-title mb-15">Contact Us</span>
                                <h2>We’re Ready to Helps! Feel Free to Contact With Us</h2>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info-wrap wow fadeInRight delay-0-2s">
                            <div class="contact-info-item">
                                <div class="icon"><i class="fal fa-map-marker-alt"></i></div>
                                <div class="content">
                                    <h4>Loaction</h4>
                                    <p>509 Main Street, 3rd Floor, New York</p>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon"><i class="far fa-envelope-open"></i></div>
                                <div class="content">
                                    <h4>Email Us</h4>
                                    <a href="mailto:supportinfo@gmail.com">supportinfo@gmail.com</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon"><i class="far fa-phone"></i></div>
                                <div class="content">
                                    <h4>Phone No</h4>
                                    <a href="callto:+0001234567899">+000 (123) 456 78 99</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <div class="contact-page-map wow fadeInUp delay-0-2s">
            <div class="our-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" style={{border:0, width: '100%'}}
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
      
        <section class="contact-form-area mt-110 mb-130 wow fadeInUp delay-0-2s">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <form id="contactForm" class="contact-form z-1 rel" action="assets/php/form-process.php" name="contactForm" method="post">
                            <div class="section-title text-center mb-40">
                               <span class="sub-title">Get In Touch</span>
                               <h2>Send Us Message</h2>
                           </div>
                            <div class="row mt-25">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="name"><i class="far fa-user"></i></label>
                                        <input type="text" id="name" name="name" class="form-control" value="" placeholder="Full Name" required data-error="Please enter your name"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="email"><i class="far fa-envelope"></i></label>
                                        <input type="email" id="email" name="email" class="form-control" value="" placeholder="Email Address" required data-error="Please enter your name"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone"><i class="far fa-phone"></i></label>
                                        <input type="text" id="phone" name="phone" class="form-control" value="" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-30">
                                    <div class="form-group">
                                        <label for="subject"><i class="far fa-question-circle"></i></label>
                                        <select id="subject">
                                            <option value="default" selected="">Subject :</option>
                                            <option value="product">Product</option>
                                            <option value="printing">Printing</option>
                                            <option value="design">Design</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="message"><i class="far fa-highlighter"></i></label>
                                        <textarea name="message" id="message" class="form-control" rows="4" placeholder="Write your Message" required data-error="Please enter your Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="tac-wrap mb-30">
                                        <input type="checkbox" id="tac" name="tac" value="tac"/>
                                        <label for="tac">I agree that my data is collected and stored.</label>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-0">
                                        <button type="submit" class="theme-btn">Send Message <i class="fas fa-arrow-right"></i></button>
                                        <div id="msgSubmit" class="hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="cta-area bgc-gradient">
            <div class="row">
                <div class="col-xl-4">
                    <div class="cta-left-image rel z-1 wow fadeInLeft delay-0-4s">
                        <img src="assets/images/cta/cta-left.png" alt="CTA Left"/>
                        <div class="circle-shapes white-shape no-animation">
                            <div class="shape-inner">
                                <span class="dot-one"></span>
                                <span class="dot-two"></span>
                                <span class="dot-three"></span>
                                <span class="dot-four"></span>
                                <span class="dot-five"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 align-self-center">
                    <div class="cta-content text-white py-55 wow fadeInUp delay-0-2s">
                        <div class="section-title mb-35">
                            <span class="sub-title mb-10">Contact With Us</span>
                            <h2>Need Any Printig For your Business?</h2>
                        </div>
                        <a href="projects.html" class="theme-btn">Start Your Projects <i class="far fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="cta-right-image rel z-1 wow fadeInRight delay-0-2s">
                        <img src="assets/images/cta/cta-right.png" alt="CTA Right"/>
                        <div class="circle-shapes white-shape no-animation">
                            <div class="shape-inner">
                                <span class="dot-one"></span>
                                <span class="dot-two"></span>
                                <span class="dot-three"></span>
                                <span class="dot-four"></span>
                                <span class="dot-five"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        </>
    )
}