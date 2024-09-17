import Slider from 'react-slick';



export default function Testimonial(){

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return(
        <>
               <section className="testimonials-area pt-130">
                <div className="container rel">
                    <div className="row justify-content-between pb-35">
                        <div className="col-lg-12">
                            <div className="section-title mb-20 wow fadeInRight delay-0-2s">
                                <span className="sub-title mb-10">Leia o que os nossos clientes têm a dizer</span>
                                <h2>Sobre a sua experiência connosco</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="">
                       <Slider {...settings}>
                            <div>
                                <div className='text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                   <div className='testimonial-card'>
                                   <h3 >Isabel Maculuve</h3>
                                   <p>"Ferdinando e a equipa são incomparáveis. Excelente qualidade para todos os itens promocionais do teu negócio. A qualidade de impressão e a forma como os itens são embalados e finalizados são nítidos e prontos para o mercado. São recetivos e responderão a quaisquer questões que possas ter para profissionais que, como eu, não estão na área da impressão! Recomendo vivamente a qualquer pequena empresa a utilizar os seus serviços!"</p>
                                   </div>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Elton Mendes</h3>
                                <p>"Ótimas pessoas, ótima cultura, resposta rápida e prazos de entrega relativamente curtos. TICOR-Print Solutions é o meu fornecedor preferido para trabalhar; a equipa irá ajudar-te a encontrar a solução ideal dentro do teu orçamento."</p>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Rodolfo Kambaco</h3>
                                <p>"Estou aqui apenas para melhorar a classificação de 5 estrelas. Fui para um trabalho que, provavelmente, é pequeno para eles, mas muito importante para mim, e trataram-no da mesma forma que eu. A minha procrastinação de última hora não foi, de todo, uma emergência para eles. 💪🏿💪🏿💪🏿 Fizeram um excelente trabalho para mim quando mais precisei. DEFINITIVAMENTE farei negócios novamente!"</p>
                                </div>
                            </div>
                        <div>
                                <div className='testimonial-card text-center pricing-plan-item wow fadeInUp delay-0-2s'>
                                <h3 >Alfredo Guambe</h3>
                                <p>Sit amet consectetur adipiscing elit, sed do eiusmod temp didunt ut labore dolore magna aliqua spsum suspendis facilisis.</p>
                                </div>
                            </div>
                       </Slider>
                    </div>
                    <div className="circle-shapes">
                        <div className="shape-inner">
                            <span className="dot-one"></span>
                            <span className="dot-two"></span>
                            <span className="dot-three"></span>
                            <span className="dot-four"></span>
                            <span className="dot-five"></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}