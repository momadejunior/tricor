import CounterItem from "../pages/counter"

export default function Statistics(){
    return(
        <>
            <section className="fact-counter-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-10">Company Statistics</span>
                                <h2>See Our Statistics That We Record to Achieve Our Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="counter-item wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="far fa-plus"></i>
                                </div>
                                <p>Active User on Product We Created</p>
                                <CounterItem className="count-text k-plus" speed="3000" stop="58" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="counter-item wow fadeInUp delay-0-4s">
                                <div className="icon">
                                    <i className="far fa-plus"></i>
                                </div>
                                <p>We Have Done lot’s of Printing Projects</p>
                                <CounterItem className="count-text plus" speed="3000" stop="3654" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="counter-item wow fadeInUp delay-0-6s">
                                <div className="icon">
                                    <i className="far fa-plus"></i>
                                </div>
                                <p>Project We Completed Along the Way</p>
                                <CounterItem className="count-text plus" speed="3000" stop="8630" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="counter-item wow fadeInUp delay-0-8s">
                                <div className="icon">
                                    <i className="far fa-plus"></i>
                                </div>
                                <p>We Have Many Years Of Experience</p>
                                <CounterItem className="count-text plus" speed="3000" stop="24" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}