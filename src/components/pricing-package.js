export default function PricingPackage() {
    return (
        <>
            <section className="pricing-plan-area pt-120 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-10">Seja nosso parceiro</span>
                                <h2>Aproveite nossas promoções e escolha seu pacote</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* Pacote Base */}
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                                <h4 className="title">Pacote Base (6 meses)</h4>
                                <div class="image"><img src="assets/images/pricing/pricing-plan-1.png" alt="Pricing"/></div>
                                <ul className="items-pricing">
                                    <li>Atendimento Prioritário <i className="fas fa-check"></i></li>
                                    <li>Testes de Impressão <i className="fas fa-check"></i></li>
                                    <li>Suporte Técnico <i className="fas fa-check"></i></li>
                                </ul>
                                <div>
                                    <span className="price">05%</span>
                                    <span className="desconto">Desconto</span>
                                </div>
                                <a href="#" className="theme-btn style-three">Aderir ao pacote <i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* Pacote Médio */}
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                                <h4 className="title">Pacote Médio (1 ano)</h4>
                                <div class="image"><img src="assets/images/pricing/pricing-plan-2.png" alt="Pricing"/></div>
                                <ul className="items-pricing">
                                    <li>Atendimento Prioritário <i className="fas fa-check"></i></li>
                                    <li>Teste de Impressão <i className="fas fa-check"></i></li>
                                    <li>Suporte Técnico <i className="fas fa-check"></i></li>
                                    <li>Revisões ilimitadas <i className="fas fa-check"></i></li>
                                    <li>Relatório sobre Tendências <i className="fas fa-check"></i></li>
                                </ul>
                                <div>
                                    <span className="price">07%</span>
                                    <span className="desconto">Desconto</span>
                                </div>
                                <a href="#" className="theme-btn style-three">Aderir ao pacote <i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* Pacote Elite */}
                        <div className="col-xl-4 col-md-6">
                            <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                                <h4 className="title">Pacote Elite (3 anos)</h4>
                                <div class="image"><img src="assets/images/pricing/pricing-plan-3.png" alt="Pricing"/></div>
                                <ul className="items-pricing">
                                    <li>Atendimento Prioritário <i className="fas fa-check"></i></li>
                                    <li>Teste de Impressão <i className="fas fa-check"></i></li>
                                    <li>Suporte Técnico <i className="fas fa-check"></i></li>
                                    <li>Revisões ilimitadas <i className="fas fa-check"></i></li>
                                    <li>Relatório sobre Tendências <i className="fas fa-check"></i></li>
                                    <li>Design de Estacionário <i className="fas fa-check"></i></li>
                                </ul>
                                <div>
                                    <span className="price">10%</span>
                                    <span className="desconto">Desconto</span>
                                </div>

                                <a href="#" className="theme-btn style-three">Aderir ao pacote <i className="far fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
