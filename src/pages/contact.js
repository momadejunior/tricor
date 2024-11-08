import ContactUS from "../components/contact-us"

export default function Contacts(){
    return(
        <>
            
        <section className="page-banner bgs-cover text-white pt-65 pb-75" style={{backgroundImage:'url(assets/images/fala_connosco.png)'}}>
            <div className="container">
                <div className="banner-inner">
                    <h2 className="page-title wow fadeInUp delay-0-2s">Contacte-nos</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Contacto</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    
        <section className="contact-feature pt-130 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-item-two style-two wow fadeInUp delay-0-2s">
                            <div className="icon">
                               <i className="flaticon-technical-support"></i> 
                            </div>
                            <div className="content">
                                <h4>Precisa de ajuda técnica?</h4>
                                <p>Estamos aqui para garantir uma experiência sem complicações, oferecendo apoio em todas as etapas do seu projeto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-item-two style-two wow fadeInUp delay-0-2s">
                            <div className="icon">
                               <i className="flaticon-chat"></i> 
                            </div>
                            <div className="content">
                                <h4>Seja nosso parceiro</h4>
                                <p>Junte-se à nossa rede de parceiros e beneficie de vantagens exclusivas! Ao trabalhar connosco, você poderá aproveitar descontos de até 10% em serviços de design e impressão.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="contact-info-area mb-130">
            <div className="container">
                <div className="row no-gap">
                    <div className="col-lg-6">
                        <div className="contact-info-content wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-25">
                                <span className="sub-title mb-15">Contacte-nos</span>
                                <h2>Tem um projeto em mente? Estamos aqui para ajudar!</h2>
                            </div>
                            <p>Seja para tirar dúvidas, pedir orçamentos ou discutir a sua próxima ideia criativa, a nossa equipa está disponível para o apoiar. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-info-wrap wow fadeInRight delay-0-2s">
                            <div className="contact-info-item">
                                <div className="icon"><i className="fal fa-map-marker-alt"></i></div>
                                <div className="content">
                                    <h4>Endereço Físico</h4>
                                    <p>Bairro de Jardim, Rua de Jardim</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="icon"><i className="far fa-envelope-open"></i></div>
                                <div className="content">
                                    <h4>Endereço de E-mail</h4>
                                    <a href="mailto:print@ticor.co.mz">print@ticor.co.mz</a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="icon"><i className="far fa-phone"></i></div>
                                <div className="content">
                                    <h4>Número de Telefone</h4>
                                    <a href="callto:+258871701039">+258 871701039</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        {/* <div className="contact-page-map wow fadeInUp delay-0-2s">
            <div className="our-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" style={{border:0, width: '100%'}}
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div> */}
      
        <section className="contact-form-area mt-110 mb-130 wow fadeInUp delay-0-2s">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form id="contactForm" className="contact-form z-1 rel" action="assets/php/form-process.php" name="contactForm" method="post">
                            <div className="section-title text-center mb-40">
                               <span className="sub-title">Entra em Contacto</span>
                               <h2>Envia-nos Uma Mensagem</h2>
                           </div>
                            <div className="row mt-25">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="name"><i className="far fa-user"></i></label>
                                        <input type="text" id="name" name="name" className="form-control"  placeholder="Nome Completo" required data-error="Nome Completo"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="email"><i className="far fa-envelope"></i></label>
                                        <input type="email" id="email" name="email" className="form-control"  placeholder="Endereço de Email" required data-error="Endereço de Email"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="phone"><i className="far fa-phone"></i></label>
                                        <input type="text" id="phone" name="phone" className="form-control"  placeholder="Número de Telefone"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-30">
                                    <div className="form-group">
                                        <label for="phone"><i className="far fa-highlighter"></i></label>
                                        <input type="text" id="phone" name="phone" className="form-control"  placeholder="Assunto"/>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="message"><i className="far fa-highlighter"></i></label>
                                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Escreva a sua Mensagem" required data-error="Please enter your Message"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="tac-wrap mb-30">
                                        <input type="checkbox" id="tac" name="tac" value="tac"/>
                                        <label for="tac">Eu concordo que os meus dados sejam recolhidos e armazenados.</label>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group mb-0">
                                        <button type="submit" className="theme-btn">Enviar Mensagem<i className="fas fa-arrow-right"></i></button>
                                        <div id="msgSubmit" className="hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
         {/*Contact Us Here*/}
         <ContactUS/>
        {/*Contact Us Here*/}
       
        </>
    )
}