import Partners from "./components/partners";
import { useState,useEffect } from "react";


export default function Footer(){




     const [logo, setLogo] = useState(null);
    
        const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";
    
        const query = `query MyQuery {
      logos {
        id
        logotipoDoWebsite {
          url
        }
      }
    }`;

    useEffect(() => {
    
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            })
    
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLogo(data.data.logos[0].logotipoDoWebsite.url);
            })
        }, []);


    return(
        <>
            {/*<!-- footer top start -->*/}
        <div className="footer-top pt-100">
            <Partners/>
        </div>
       
        <footer className="footer-area pt-80">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="widget widget_about wow fadeInUp delay-0-2s">
                            <div className="footer-logo mb-25">
                                <a target="_blank" href="index.html"><img src={logo} alt="Logo"/></a>
                            </div>
                            <p>Oferecemos serviços personalizados e produtos de alta qualidade, adira e descubra como podemos ajudá-lo a destacar sua marca.</p>
                            <div className="social-style-two mt-15">
                            <a href="https://api.whatsapp.com/send?phone=+258871701039&text=Ola%20Tricor." target="__blank">
<img src="./img/wts.png" className="flaticon-t-shirt icon-social"/></a>
                            <a target="_blank" href="https://web.facebook.com/profile.php?id=61566302444827"><img src="./img/fb.png" className="flaticon-t-shirt icon-social"/></a>
                            <a target="_blank" href="https://www.linkedin.com/company/105152594/admin/dashboard/"><img src="./img/in.png" className="flaticon-t-shirt icon-social"/></a>
                            <a target="_blank" href="https://www.instagram.com/ticor_printsolutions?igsh=YzljYTk1ODg3Zg=="><img src="./img/ig.png" className="flaticon-t-shirt icon-social"/></a>
                            <a target="_blank" href="https://www.youtube.com/@TicorPrintSolution"><img src="./img/yt.png" className="flaticon-t-shirt icon-social"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="widget widget_nav_menu wow fadeInUp delay-0-4s">
                            <h4 className="widget-title">Links Úteis</h4>
                            <ul>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=XDsU7naRJQg">Impressão Digital</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=sLhFSKYV46s">Sublimação</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=aKW5duow17w">Impressão Offset</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=a5r1lwi7hZ0">Serigrafia</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=w-xSpz1J-jw">O que são Bleeds?</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=nM1wS6x8DZM">RGB & CMYK</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=ITtGAhRd_9A">Overprint</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=kWncmp9wU-k">Arte-Final</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=_4PGc_B6hAI">SpreadPages</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/watch?v=MQmL6rOZ6gQ">Curvas</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="widget widget_contact_info wow fadeInUp delay-0-6s">
                            <h4 className="widget-title">Suporte</h4>
                            <p>Precisa de qualquer apoio! ou trabalhar juntos? </p>
                            <ul>
                                <li><i className="far fa-map-marker-alt"></i>Bairro de Jardim, Rua do Jardim</li>
                                <li><i className="far fa-envelope"></i> <a target="_blank" href="mailto:print@ticor.co.mz">print@ticor.co.mz</a></li>
                                <li><i className="far fa-phone"></i> <a target="_blank" href="calto:+258871701039">+258 87 170 1039</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-15 pt-25 pb-10">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="copyright-text text-center text-lg-start">
                                <p><a target="_blank" href="index.html">Printco</a> © Copyright 2024, All Right Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="payment-method-image mb-15 text-center text-lg-end">
                               {/*  <a target="_blank" href="#"><img src="assets/images/footer/payment-method.png" alt="Payment Method"/></a> */}
                            </div>
                        </div>
                    </div>
                    
               
                    <div className="back-to-top">
                        <span className="back-top"><i className="fa fa-angle-up"></i></span>
                    </div>
                 
                </div>
            </div>
        </footer>
        </>
    )
}