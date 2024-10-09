export default function ContactUS(){
    return(
        <>
          <section className="cta-area bg-contact">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="cta-left-image rel z-1 wow fadeInLeft delay-0-4s">
                            <img src="assets/images/cta/printer.png" alt="CTA Left" />
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
                    <div className="col-xl-4 quote-contact-us align-self-center">
                        <div className="text-white py-55 wow fadeInUp delay-0-2s">
                            <div className="section-title mb-35">
                                <span className="sub-title mb-10">Estamos aqui para ajudar</span>
                                <h2 className="title-contact-us">Precisas de soluções de impressão ou materiais para o teu negócios?</h2>
                            </div>
                            <div className="input-contact">
                                <div>
                                    <a href="projects.html" className="theme-btn">Peça um orçamento<i className="far fa-long-arrow-right"></i></a>
                                </div>
                                <div>
                                    <a href="projects.html" className="theme-btn">Entra na loja<i className="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 items-brand">
                        
                            <img src="assets/images/cta/items.png" alt="CTA Right" />
                       
                    </div>
                </div>
            </section>

        </>
    )
}