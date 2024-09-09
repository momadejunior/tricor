export default function Shop(){
    return(
        <>
        
        <section class="page-banner bgs-cover text-white pt-65 pb-75" style={{backgroundImage:'url(assets/images/banner.jpg)'}}>
            <div class="container">
                <div class="banner-inner">
                    <h2 class="page-title wow fadeInUp delay-0-2s">Shop_01</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb wow fadeInUp delay-0-4s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">shop</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
       
        <section class="product-area py-130">
            <div class="container">
                <div class="shop-shorter rel z-3 mb-30 wow fadeInUp delay-0-2s">
                    <form action="#" class="default-search-form">
                        <input type="text" placeholder="Search" required/>
                        <button type="submit" class="searchbutton far fa-search"></button>
                    </form>
                    <div class="sort-text">
                        Showing 1 - 12 of 30 Results
                    </div>
                    <div class="products-dropdown">
                        <select>
                            <option value="default" selected="">Sort by Newness</option>
                            <option value="old">Sort by Oldest</option>
                            <option value="hight-to-low">High To Low</option>
                            <option value="low-to-high">Low To High</option>
                        </select>
                    </div>
                    <ul class="grid-list">
                        <li><a href="#"><i class="far fa-list"></i></a></li>
                        <li><a href="#"><i class="fal fa-border-all"></i></a></li>
                    </ul>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-2s">
                            <div class="image">
                                <span class="badge">New</span>
                                <img src="assets/images/shop/product1.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Business Card</a></h5>
                                    <div class="price">25</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-4s">
                            <div class="image">
                                <span class="badge red">Hot</span>
                                <img src="assets/images/shop/product2.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">ID Card Printing</a></h5>
                                    <div class="price">32</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-6s">
                            <div class="image">
                                <img src="assets/images/shop/product3.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Coffee Mug</a></h5>
                                    <div class="price">13</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-8s">
                            <div class="image">
                                <img src="assets/images/shop/product7.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Box Printing</a></h5>
                                    <div class="price">13</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-2s">
                            <div class="image">
                                <img src="assets/images/shop/product4.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Packet Design</a></h5>
                                    <div class="price">34</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-4s">
                            <div class="image">
                                <span class="badge pink">-25%</span>
                                <img src="assets/images/shop/product5.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">T-Shirt Design</a></h5>
                                    <div class="price">24</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-6s">
                            <div class="image">
                                <span class="badge">New</span>
                                <img src="assets/images/shop/product6.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Cup Printing</a></h5>
                                    <div class="price">25</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-8s">
                            <div class="image">
                                <span class="badge red">-30%</span>
                                <img src="assets/images/shop/product8.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Cup Printing</a></h5>
                                    <div class="price">25</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-2s">
                            <div class="image">
                                <span class="badge pink">-25%</span>
                                <img src="assets/images/shop/product9.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Food Box Design</a></h5>
                                    <div class="price">24</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-4s">
                            <div class="image">
                                <img src="assets/images/shop/product10.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Packet Design</a></h5>
                                    <div class="price">34</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-6s">
                            <div class="image">
                                <span class="badge">New</span>
                                <img src="assets/images/shop/product11.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Card Printing</a></h5>
                                    <div class="price">25</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-item wow fadeInUp delay-0-8s">
                            <div class="image">
                                <img src="assets/images/shop/product12.jpg" alt="Product"/>
                            </div>
                            <div class="content">
                                <div class="title-price">
                                    <h5><a href="product-details.html">Mug Printing</a></h5>
                                    <div class="price">25</div>
                                </div>
                                <div class="social-style-two">
                                    <a href="#"><i class="far fa-shopping-cart"></i></a>
                                    <a href="#"><i class="far fa-heart"></i></a>
                                    <a href="#"><i class="far fa-eye"></i></a>
                                    <a href="#"><i class="far fa-star"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="pagination flex-wrap justify-content-center pt-20">
                    <li class="page-item disabled">
                        <span class="page-link"><i class="fas fa-chevron-left"></i></span>
                    </li>
                    <li class="page-item active">
                        <span class="page-link">
                            01
                            <span class="sr-only">(current)</span>
                        </span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">02</a></li>
                    <li class="page-item"><a class="page-link" href="#">03</a></li>
                    <li class="page-item"><a class="page-link" href="#">04</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                    </li>
                </ul>
            </div>
        </section>
    
        <section class="cta-area bgc-gradient">
            <div class="row">
                <div class="col-xl-4">
                    <div class="cta-left-image rel z-1 wow fadeInLeft delay-0-4s">
                        <img src="assets/images/cta/cta-left.png" alt="CTA Left"/>
                        <div class="circle-shapes white-shape no-animation">
                            <div class="shape-inner">
                                <span class="dot-one"></span>
                                <span class="dot-two"></span>
                                <span class="dot-three"></span>
                                <span class="dot-four"></span>
                                <span class="dot-five"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 align-self-center">
                    <div class="cta-content text-white py-55 wow fadeInUp delay-0-2s">
                        <div class="section-title mb-35">
                            <span class="sub-title mb-10">Contact With Us</span>
                            <h2>Need Any Printig For your Business?</h2>
                        </div>
                        <a href="projects.html" class="theme-btn">Start Your Projects <i class="far fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="cta-right-image rel z-1 wow fadeInRight delay-0-2s">
                        <img src="assets/images/cta/cta-right.png" alt="CTA Right"/>
                        <div class="circle-shapes white-shape no-animation">
                            <div class="shape-inner">
                                <span class="dot-one"></span>
                                <span class="dot-two"></span>
                                <span class="dot-three"></span>
                                <span class="dot-four"></span>
                                <span class="dot-five"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       
        </>
    )
}