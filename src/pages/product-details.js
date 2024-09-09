export default function ProductDetails(){
    return(
        <>
        <section class="page-banner bgs-cover text-white pt-65 pb-75">
            <div class="container">
                <div class="banner-inner">
                    <h2 class="page-title wow fadeInUp delay-0-2s">Single Product_01</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb wow fadeInUp delay-0-4s">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Single Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
       
        <section class="product-details pt-130 rpt-100">
            <div class="container">
                <div class="row align-items-center align-items-lg-start">
                    <div class="col-lg-5 col-9">
                        <div class="tab-content preview-images rmb-50 wow fadeInLeft delay-0-2s">
                            <div class="tab-pane fade preview-item active show" id="preview1">
                                <img src="assets/images/shop/preview1.jpg" alt="Perview"/>
                            </div>
                            <div class="tab-pane fade preview-item" id="preview2">
                                <img src="assets/images/shop/preview1.jpg" alt="Perview"/>
                            </div>
                            <div class="tab-pane fade preview-item" id="preview3">
                                <img src="assets/images/shop/preview1.jpg" alt="Perview"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-3">
                        <div class="nav flex-column thumb-images rmb-20">
                            <a href="#preview1" data-bs-toggle="tab" class="thumb-item active show">
                                <img src="assets/images/shop/thumb1.jpg" alt="Thumb"/>
                            </a>
                            <a href="#preview2" data-bs-toggle="tab" class="thumb-item">
                                <img src="assets/images/shop/thumb2.jpg" alt="Thumb"/>
                            </a>
                            <a href="#preview3" data-bs-toggle="tab" class="thumb-item">
                                <img src="assets/images/shop/thumb3.jpg" alt="Thumb"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="product-details-content wow fadeInRight delay-0-2s">
                            <div class="section-title">
                                <h2>Business Card Printing</h2>
                            </div>
                            <div class="ratting-price mb-30">
                                <div class="ratting">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="price">59.58</span>
                            </div>
                            <hr class="mb-25"/>
                            <p>Sed ut perspiciatis unde omnis iste natus error silupt atem accusantium doloremque laudantium rem riams eaque quae abillo inventore qchitecto beatae vitae dicta sunt explicabo. Nemo enim psaml uptatem quia voluptas sit aspernatur aut odit aut fugit sedes quia consequuntur</p>
                            <hr class="mt-30"/>
                            <ul class="category-tags pt-10 pb-15">
                                <li>
                                    <b>Category</b>
                                    <span>:</span>
                                    <a href="#">Printing</a>
                                    <a href="#">Design</a>
                                    <a href="#">Branding</a>
                                </li>
                                <li>
                                    <b>Tags</b>
                                    <span>:</span>
                                    <a href="#">Shop</a>
                                    <a href="#">eCommerce</a>
                                    <a href="#">Electronics</a>
                                </li>
                            </ul>
                            <hr/>
                            <form action="#" class="add-to-cart pt-15">
                                <input type="number" value="01" min="1" max="20" onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;" required/>
                                <button type="submit" class="theme-btn">Add to Cart</button>
                                <button class="wishlist"><i class="far fa-heart"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="nav nav-tabs product-information-tab mt-80 mb-40 wow fadeInUp delay-0-2s">
                    <li><a href="#details" data-bs-toggle="tab" class="active show">Descrptions</a></li>
                    <li><a href="#information" data-bs-toggle="tab">Information</a></li>
                    <li><a href="#vendorInfo" data-bs-toggle="tab">Vendor Info</a></li>
                    <li><a href="#review" data-bs-toggle="tab">Review (0)</a></li>
                </ul>
                <div class="tab-content pb-50 wow fadeInUp delay-0-2s">
                    <div class="tab-pane fade active show" id="details">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit atis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihile</p>
                    </div>
                    <div class="tab-pane fade" id="information">
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                        <ul class="list-style-one mt-25 mb-25">
                            <li>Direct monitoring of your favorite places from all parts of the world.</li>
                            <li>Talking and listening to the two ends. (Same Like Mobile)</li>
                            <li>Wide Angle and Long Length</li>
                            <li>Smart zooming point</li>
                            <li>HD quality video output.</li>
                            <li>Smart Alarming System</li>
                            <li>Power system 12 volts (without adapter)</li>
                        </ul>
                        <p>Now wherever you are, wherever you are, you can easily monitor your CCTV videos through your mobile, tab, laptop or PC. With the wireless camera, you can view the camera from your mobile or computer to the right-left 0 to 360-degree video. Cover the flower room with a camera.</p>
                    </div>
                    <div class="tab-pane fade" id="vendorInfo">
                        <p>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                        <ul class="list-style-two mt-25 mb-25">
                            <li>Strong lens for long distance surveillance.</li>
                            <li>WIFI technology can view and view the Internet</li>
                            <li>Auto Night Vision, Clear video can be seen in the dark at night</li>
                            <li>Video recording system on a memory card</li>
                            <li>You can watch back videos from the phone</li>
                            <li>CCTV videos can be viewed live on your Laptop, Desktop, Smartphone or Tablet PC</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="review">
                        <h4>0 Review</h4>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="review-form-area mb-120 wow fadeInUp delay-0-2s">
            <div class="container">
                <form id="review-form" class="review-form z-1 rel" name="review-form" action="#" method="post">
                    <h3>Leave Your Reviews</h3>
                    <div class="ratting">
                        <h5>Your Rating</h5>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="row mt-25">
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input type="text" id="full-name" name="full-name" class="form-control" value="" placeholder="Full Name" required=""/>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input type="text" id="phone" name="phone" class="form-control" value="" placeholder="Phone Number" required=""/>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input type="email" id="email-address" name="email" class="form-control" value="" placeholder="Email Address" required=""/>
                            </div>
                        </div>
                        <div class="col-md-12 mb-30">
                            <div class="form-group">
                                <select>
                                    <option value="default" selected="">Subject :</option>
                                    <option value="product">Product</option>
                                    <option value="printing">Printing</option>
                                    <option value="design">Design</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea name="message" id="message" class="form-control" rows="4" placeholder="Write Message" required=""></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-0">
                                <button type="submit" class="theme-btn">Send Reviews <i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
       
        <section class="related-product-area mt-90 mb-70">
            <div class="container pb-55">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7">
                        <div class="section-title text-center mb-35 wow fadeInUp delay-0-2s">
                            <h2>Related Product</h2>
                        </div>
                    </div>
                </div>
                <div class="realated-product-slider">
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
                    <div class="product-item wow fadeInUp delay-0-8s">
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
 