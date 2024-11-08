import ContactUS from "../components/contact-us"

export default function Orcamento() {
    return (
        <>
            <section className="page-banner bgs-cover text-white pt-65 pb-75" style={{ backgroundImage: 'url(assets/images/fala_connosco.png)' }}>
                <div className="container">
                    <div className="banner-inner">
                        <h2 className="page-title wow fadeInUp delay-0-2s">Solicitação de Orçamento</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Orçamento</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="contact-form-area mt-110 mb-130 wow fadeInUp delay-0-2s">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form id="orcamentoForm" className="contact-form z-1 rel" action="assets/php/form-process.php" name="orcamentoForm" method="post">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">Formulário de Solicitação de Orçamento</span>
                                    <h2>Envie-nos uma Mensagem</h2>
                                </div>
                                <div className="row mt-25">
                                    {/* Nome Completo */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="nome"><i className="far fa-user"></i></label>
                                            <input type="text" id="nome" name="nome" className="form-control" placeholder="Nome Completo" required />
                                        </div>
                                    </div>

                                    {/* E-mail */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="email"><i className="far fa-envelope"></i></label>
                                            <input type="email" id="email" name="email" className="form-control" placeholder="E-mail" required />
                                        </div>
                                    </div>

                                    {/* Telefone */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="telefone"><i className="far fa-phone"></i></label>
                                            <input type="text" id="telefone" name="telefone" className="form-control" placeholder="Telefone" required />
                                        </div>
                                    </div>

                                    {/* Material que Pretende Imprimir */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Material que Pretende Imprimir</label>
                                            <div className="checkbox-options">
                                                <label>
                                                    <input type="checkbox" name="material" value="Cartoes de Visita" />
                                                    Cartões de Visita
                                                </label>
                                                <label>
                                                    <input type="checkbox" name="material" value="Folhetos" />
                                                    Folhetos
                                                </label>
                                                <label>
                                                    <input type="checkbox" name="material" value="Banner" />
                                                    Banner
                                                </label>
                                                <label>
                                                    <input type="checkbox" name="material" value="Adesivos" />
                                                    Adesivos
                                                </label>
                                                <label>
                                                    <input type="text" name="materialOutros" className="form-control" placeholder="Outros (especifique)" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantidade */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="quantidade">Quantidade</label>
                                            <input type="number" id="quantidade" name="quantidade" className="form-control" placeholder="Quantidade" required />
                                        </div>
                                    </div>

                                    {/* Dimensões */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="dimensoes">Dimensões (cm)</label>
                                            <input type="text" id="dimensoes" name="dimensoes" className="form-control" placeholder="Dimensões (cm)" />
                                        </div>
                                    </div>

                                    {/* Material */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Material</label>
                                            <div className="radio-options">
                                                <label>
                                                    <input type="radio" name="materialTipo" value="Papel Glossy" />
                                                    Papel Glossy
                                                </label>
                                                <label>
                                                    <input type="radio" name="materialTipo" value="Papel Matte" />
                                                    Papel Matte
                                                </label>
                                                <label>
                                                    <input type="radio" name="materialTipo" value="Vinil" />
                                                    Vinil
                                                </label>
                                                <label>
                                                    <input type="text" name="materialTipoOutros" className="form-control" placeholder="Outros (especifique)" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Acabamento */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Acabamento</label>
                                            <div className="radio-options">
                                                <label>
                                                    <input type="radio" name="acabamento" value="Brilhante" />
                                                    Brilhante
                                                </label>
                                                <label>
                                                    <input type="radio" name="acabamento" value="Fosco" />
                                                    Fosco
                                                </label>
                                                <label>
                                                    <input type="radio" name="acabamento" value="Laminacao" />
                                                    Laminação
                                                </label>
                                                <label>
                                                    <input type="text" name="acabamentoOutros" className="form-control" placeholder="Outros (especifique)" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Data de Entrega */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="dataEntrega">Data de Entrega</label>
                                            <input type="date" id="dataEntrega" name="dataEntrega" className="form-control" required />
                                        </div>
                                    </div>

                                    {/* Descrição do Projeto */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="descricaoProjeto">Descrição do Projeto</label>
                                            <textarea name="descricaoProjeto" id="descricaoProjeto" className="form-control" rows="4" placeholder="Descrição do Projeto" required></textarea>
                                        </div>
                                    </div>

                                    {/* Anexar Arquivo */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="anexo">Anexar Arquivo (opcional)</label>
                                            <input type="file" id="anexo" name="anexo" className="form-control" />
                                        </div>
                                    </div>

                                    {/* Mensagem Adicional */}
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="mensagemAdicional">Mensagem Adicional</label>
                                            <textarea name="mensagemAdicional" id="mensagemAdicional" className="form-control" rows="4" placeholder="Mensagem Adicional"></textarea>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
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

            {/* Contact Us Component */}
            <ContactUS />
        </>
    )
}
