import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/about';
import Home from "./pages/Home";
import tricor from './assets/images/logos/logo.png';
import Projects from "./pages/projects";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import ServiceDetails from "./pages/service-details";
import Services from "./pages/services";
import BlogDetails from "./pages/blog-details";
import Teams from "./pages/team";
import ProductDetails from "./pages/product-details";
import Faqs from "./pages/faqs";
import Contacts from "./pages/contact";
import Error from "./pages/404";
import ProjectDetails from "./pages/project-details";
import { useEffect, useState } from "react";
import PricingPackage from "./components/pricing-package";
import Testimonial from "./components/testimonial";
import LastestProject from "./components/lastest-project";
import ContactUS from "./components/contact-us";
import CartPage from "./pages/cart";
import { CartProvider } from "./components/cartcontext";
import CheckoutPage from "./pages/checkout";
import ConfirmationPage from "./pages/confirmation";
import Orcamento from "./pages/orcamento";

export default function Header() { 

    return (
        <>
            <div
                className="navbar-top navbar-top-style"
                
            >
                <div className="container container-1570">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="topbar-left text-lg-start text-center">
                                <img src="./img/cell.png" className="flaticon-t-shirt icon-navbar"/>
                                <b>+258 87 170 1039</b>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="topbar-right justify-content-center justify-content-lg-end">
                                <li>
                                <img src="./img/user.png" className="flaticon-t-shirt icon-navbar"/><b>Minha Conta</b>
                                </li>
                                <li className="social-style-one">
                                <img src="./img/list.png" className="flaticon-t-shirt icon-navbar"/><b>Meus pedidos</b>
                                </li>

                                <li className="social-style-one">
                                <img src="./img/exit.png" className="flaticon-t-shirt icon-navbar"/><b>Seja Bem-vindo</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        <CartProvider>
        	<Router>
            <nav className="navbar style-one navbar-area navbar-expand-lg py-20">
                <div className="container container-1570">
                    <div className="responsive-mobile-menu">
                        <button
                            className="menu toggle-btn d-block d-lg-none"
                            data-target="#Iitechie_main_menu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-left" />
                            <span className="icon-right" />
                        </button>
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={tricor} alt="img" />
                        </Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                       <Link className="search-bar-btn" to="#">
                            <i className="far fa-search" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="Iitechie_main_menu">
                        <ul className="navbar-nav menu-open text-lg-end">
                            <li className="menu-item-has-children">
                                <Link to="/">Página Inicial</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="index.html">Home One</Link></li>
                                    <li><Link to="index2.html">Home Two</Link></li>
                                    <li><Link to="index3.html">Home Three</Link></li>
                                </ul>*/}
                            </li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li className="menu-item-has-children">
                                <Link to="/services">Serviços</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="services.html">Services One</Link></li>
                                    <li><Link to="services2.html">Services Two</Link></li>
                                    <li><Link to="service-details.html">Service Details</Link></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                                <Link to="/projects">Projetos</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="projects.html">Projects</Link></li>
                                    <li><Link to="project-details.html">Projects Details</Link></li>
                                </ul>
                            </li> */}

                            {/* <li className="menu-item-has-children">
                                <Link to="/shop">Loja</Link>
                                <ul className="sub-menu">
                                    <li><Link to="shop.html">Shop One</Link></li>
                                    <li><Link to="shop2.html">Shop Two</Link></li>
                                    <li><Link to="shop3.html">Shop Three</Link></li>
                                    <li><Link to="product-details.html">Single Product_1</Link></li>
                                    <li><Link to="product-details2.html">Single Product_2</Link></li>
                                </ul>
                            </li> */}
                            
                            <li className="menu-item-has-children">
                            <Link to="/contact">Fala connosco</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link to="shop.html">Shop One</Link></li>
                                    <li><Link to="shop2.html">Shop Two</Link></li>
                                    <li><Link to="shop3.html">Shop Three</Link></li>
                                    <li><Link to="product-details.html">Single Product_1</Link></li>
                                    <li><Link to="product-details2.html">Single Product_2</Link></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                               <link to="#">Páginas</Link>
                                <ul className="sub-menu">
                                    <li><Link to="team.html">Team Members</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link to="/blog">Blog</Link>
                                        {/*<ul className="sub-menu">
                                            <li><Link to="blog.html">Blog</Link></li>
                                            <li><Link to="blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/contact">Fala connosco</Link></li>
                                    <li><Link to="/404">404 Error</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">
                        <button className="search-bar-btn">
                            <i className="far fa-search" />
                        </button>
                        <button>
                           <Link to="/cart"> <i className="far fa-shopping-basket" /></Link>
                        </button>
                        
                       <Link to="/shop" className="theme-btn style-two">
                            Entrar na loja<i className="far fa-long-arrow-right" />
                        </Link>
                        <div className="menu-sidebar">
                            <button>
                            <Link to="https://api.whatsapp.com/send?phone=+258871701039&text=Ola%20Tricor." target="__blank"><img src="./img/wts.png" className="flaticon-t-shirt icon-social"/></Link>
                            </button>

                            <button>
                                <Link target="_blank" to="https://web.facebook.com/profile.php?id=61566302444827"><img src="./img/fb.png" className="flaticon-t-shirt icon-social"/></Link>
                            </button>

                            <button>
                                <Link target="_blank" to="https://www.linkedin.com/company/105152594/admin/dashboard/"><img src="./img/in.png" className="flaticon-t-shirt icon-social"/></Link>
                            </button>

                            <button>
                                <Link target="_blank" to="https://www.instagram.com/ticor_printsolutions?igsh=YzljYTk1ODg3Zg=="><img src="./img/ig.png" className="flaticon-t-shirt icon-social"/></Link>
                            </button>

                            <button>
                            <Link target="_blank" to="https://www.youtube.com/@TicorPrintSolution"><img src="./img/yt.png" className="flaticon-t-shirt icon-social"/></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/service-details" element={<ServiceDetails/>}/>
                    <Route path="/blog-details" element={<BlogDetails/>}/>
                    <Route path="/team" element={<Teams/>}/>
                    <Route path="/product-details/:id" element={<ProductDetails/>}/>
                    <Route path="/faqs" element={<Faqs/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                    <Route path="/404" element={<Error/>}/>
                    <Route path="/project-details" element={<ProjectDetails/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/confirmation" element={<ConfirmationPage/>}/>
                    <Route path="/orcamento" element={<Orcamento/>}/>

                </Routes>
            </Router>
            </CartProvider>
        </>
    )
}