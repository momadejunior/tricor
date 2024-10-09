import ContactUS from "../components/contact-us";
import PricingPackage from "../components/pricing-package";
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
     <PricingPackage/>
       
       <ContactUS/>
        
        </>
    )
}