import ContactUS from "../components/contact-us"

export default function Contacts(){
    return(
        <>
            
        <section class="page-banner bgs-cover text-white pt-65 pb-75" style={{backgroundImage:'url(assets/images/fala_connosco.png)'}}>
            <div class="container">
                <div class="banner-inner">
                    <h2 class="page-title wow fadeInUp delay-0-2s">Contacte-nos</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb wow fadeInUp delay-0-4s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Contacto</li>
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
                                <h4>Precisa de ajuda técnica?</h4>
                                <p>Estamos aqui para garantir uma experiência sem complicações, oferecendo apoio em todas as etapas do seu projeto.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="service-item-two style-two wow fadeInUp delay-0-2s">
                            <div class="icon">
                               <i class="flaticon-chat"></i> 
                            </div>
                            <div class="content">
                                <h4>Seja nosso parceiro</h4>
                                <p>Junte-se à nossa rede de parceiros e beneficie de vantagens exclusivas! Ao trabalhar connosco, você poderá aproveitar descontos de até 10% em serviços de design e impressão.</p>
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
                                <span class="sub-title mb-15">Contacte-nos</span>
                                <h2>Tem um projeto em mente? Estamos aqui para ajudar!</h2>
                            </div>
                            <p>Seja para tirar dúvidas, pedir orçamentos ou discutir a sua próxima ideia criativa, a nossa equipa está disponível para o apoiar. </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info-wrap wow fadeInRight delay-0-2s">
                            <div class="contact-info-item">
                                <div class="icon"><i class="fal fa-map-marker-alt"></i></div>
                                <div class="content">
                                    <h4>Endereço Físico</h4>
                                    <p>Bairro de Jardim, Rua de Jardim</p>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon"><i class="far fa-envelope-open"></i></div>
                                <div class="content">
                                    <h4>Endereço de E-mail</h4>
                                    <a href="mailto:comunica@ticor.co.mz">comunica@ticor.co.mz</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon"><i class="far fa-phone"></i></div>
                                <div class="content">
                                    <h4>Número de Telefone</h4>
                                    <a href="callto:+258871701039">+258 871701039</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        {/* <div class="contact-page-map wow fadeInUp delay-0-2s">
            <div class="our-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" style={{border:0, width: '100%'}}
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div> */}
      
        <section class="contact-form-area mt-110 mb-130 wow fadeInUp delay-0-2s">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <form id="contactForm" class="contact-form z-1 rel" action="assets/php/form-process.php" name="contactForm" method="post">
                            <div class="section-title text-center mb-40">
                               <span class="sub-title">Entra em Contacto</span>
                               <h2>Envia-nos Uma Mensagem</h2>
                           </div>
                            <div class="row mt-25">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="name"><i class="far fa-user"></i></label>
                                        <input type="text" id="name" name="name" class="form-control" value="" placeholder="Nome Completo" required data-error="Nome Completo"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="email"><i class="far fa-envelope"></i></label>
                                        <input type="email" id="email" name="email" class="form-control" value="" placeholder="Endereço de Email" required data-error="Endereço de Email"/>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="phone"><i class="far fa-phone"></i></label>
                                        <input type="text" id="phone" name="phone" class="form-control" value="" placeholder="Número de Telefone"/>
                                    </div>
                                </div>
                                <div class="col-sm-6 mb-30">
                                    <div class="form-group">
                                        <label for="phone"><i class="far fa-highlighter"></i></label>
                                        <input type="text" id="phone" name="phone" class="form-control" value="" placeholder="Assunto"/>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="message"><i class="far fa-highlighter"></i></label>
                                        <textarea name="message" id="message" class="form-control" rows="4" placeholder="Escreva a sua Mensagem" required data-error="Please enter your Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="tac-wrap mb-30">
                                        <input type="checkbox" id="tac" name="tac" value="tac"/>
                                        <label for="tac">Eu concordo que os meus dados sejam recolhidos e armazenados.</label>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group mb-0">
                                        <button type="submit" class="theme-btn">Enviar Mensagem<i class="fas fa-arrow-right"></i></button>
                                        <div id="msgSubmit" class="hidden"></div>
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