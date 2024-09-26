import ContactUS from "../components/contact-us";
import ServicesItem from "../components/services-items";

export default function Services(){
    return(
        <>
            
        <section class="page-banner bgs-cover text-white pt-65 pb-75" style={{backgroundImage: 'url(assets/images/servicos.png)'}}>
            <div class="container">
                <div class="banner-inner">
                    <h2 class="page-title wow fadeInUp delay-0-2s">Serviços</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb wow fadeInUp delay-0-4s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Serviços</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
  {/* 
     serivice item */}

     <ServicesItem/>



      {/*Counter area FAQ*/}

      
       
       {/*Counter area FAQ*/}


        <section class="pricing-plan-area pt-120 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                            <span class="sub-title mb-10">Pricing Package</span>
                            <h2>Smart Printing Pricing Package</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-4 col-md-6">
                        <div class="pricing-plan-item wow fadeInUp delay-0-2s">
                            <h4 class="title">Regular Plan</h4>
                            <div class="image">
                                <img src="assets/images/pricing/pricing-plan-1.png" alt="Pricing"/>
                            </div>
                            <ul>
                                <li>Design & Printing <i class="fas fa-check"></i></li>
                                <li>3D Printing <i class="fas fa-check"></i></li>
                                <li>Ofset Printing <i class="fas fa-check"></i></li>
                                <li class="unavailable">Color Printing <i class="fas fa-check"></i></li>
                                <li class="unavailable">Logo & T-Shirt <i class="fas fa-check"></i></li>
                            </ul>
                            <span class="price">258.53</span>
                            <a href="contact.html" class="theme-btn style-three">Choose Package <i class="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="pricing-plan-item wow fadeInUp delay-0-4s">
                            <h4 class="title">Standard Plan</h4>
                            <div class="image">
                                <img src="assets/images/pricing/pricing-plan-2.png" alt="Pricing"/>
                            </div>
                            <ul>
                                <li>Design & Printing <i class="fas fa-check"></i></li>
                                <li>3D Printing <i class="fas fa-check"></i></li>
                                <li>Ofset Printing <i class="fas fa-check"></i></li>
                                <li>Color Printing <i class="fas fa-check"></i></li>
                                <li class="unavailable">Logo & T-Shirt <i class="fas fa-check"></i></li>
                            </ul>
                            <span class="price">583.53</span>
                            <a href="contact.html" class="theme-btn style-three">Choose Package <i class="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                        <div class="pricing-plan-item wow fadeInUp delay-0-6s">
                            <h4 class="title">Silver Plan</h4>
                            <div class="image">
                                <img src="assets/images/pricing/pricing-plan-3.png" alt="Pricing"/>
                            </div>
                            <ul>
                                <li>Design & Printing <i class="fas fa-check"></i></li>
                                <li>3D Printing <i class="fas fa-check"></i></li>
                                <li>Ofset Printing <i class="fas fa-check"></i></li>
                                <li>Color Printing <i class="fas fa-check"></i></li>
                                <li>Logo & T-Shirt <i class="fas fa-check"></i></li>
                            </ul>
                            <span class="price">858.53</span>
                            <a href="contact.html" class="theme-btn style-three">Choose Package <i class="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       <ContactUS/>
        
        </>
    )
}