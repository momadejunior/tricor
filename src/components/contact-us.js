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
                    <div className="col-xl-4 align-self-center">
                        <div className="cta-content text-white py-55 wow fadeInUp delay-0-2s">
                            <div className="section-title mb-35">
                                <span className="sub-title mb-10">Estamos aqui para ajudar</span>
                                <h2 className="title-contact-us">Precisas de solucoes de impressao ou materiais para o teu negocios?</h2>
                            </div>
                            <a href="projects.html" className="theme-btn">Peca um orcamento<i className="far fa-long-arrow-right"></i></a>
                            <a href="projects.html" className="theme-btn">Entra na loja<i className="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="cta-right-image rel z-1 wow fadeInRight delay-0-2s">
                            <img src="assets/images/cta/items.png" alt="CTA Right" />
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