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

export default function Header() { 


    const result = 'ola';

    
    return (
        <>
            <div
                className="navbar-top navbar-top-style"
                
            >
                <div className="container container-1570">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="topbar-left text-lg-start text-center">
                                <span className="off"><i className="fal fa-phone" /></span>
                                <span>+258 84 678 6350 </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="topbar-right justify-content-center justify-content-lg-end">
                                <li>
                                    <i className="fal fa-user" /> <b>MInha Conta</b>
                                </li>
                                <li className="social-style-one">
                                    <i className="fab fa-facebook-f" aria-hidden="true" /><b>Meus pedidos</b>
                                </li>

                                <li className="social-style-one">
                                    <i className="fab fa-logout" aria-hidden="true" /><b>Seja Bem-vindo</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



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
                        <a className="search-bar-btn" href="#">
                            <i className="far fa-search" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="Iitechie_main_menu">
                        <ul className="navbar-nav menu-open text-lg-end">
                            <li className="menu-item-has-children">
                                <a href="/">Página Inicial</a>
                                {/*<ul className="sub-menu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index2.html">Home Two</a></li>
                                    <li><a href="index3.html">Home Three</a></li>
                                </ul>*/}
                            </li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li className="menu-item-has-children">
                                <Link to="/services">Serviços</Link>
                                {/*<ul className="sub-menu">
                                    <li><a href="services.html">Services One</a></li>
                                    <li><a href="services2.html">Services Two</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                                <Link to="/projects">Projetos</Link>
                                {/*<ul className="sub-menu">
                                    <li><a href="projects.html">Projects</a></li>
                                    <li><a href="project-details.html">Projects Details</a></li>
                                </ul>
                            </li> */}
                            <li className="menu-item-has-children">
                                <a href="/shop">Loja</a>
                                {/*<ul className="sub-menu">
                                    <li><a href="shop.html">Shop One</a></li>
                                    <li><a href="shop2.html">Shop Two</a></li>
                                    <li><a href="shop3.html">Shop Three</a></li>
                                    <li><a href="product-details.html">Single Product_1</a></li>
                                    <li><a href="product-details2.html">Single Product_2</a></li>
                                </ul>*/}
                            </li>
                            <li className="menu-item-has-children">
                            <li><Link to="/contact">Fala connosco</Link></li>
                                {/*<ul className="sub-menu">
                                    <li><a href="shop.html">Shop One</a></li>
                                    <li><a href="shop2.html">Shop Two</a></li>
                                    <li><a href="shop3.html">Shop Three</a></li>
                                    <li><a href="product-details.html">Single Product_1</a></li>
                                    <li><a href="product-details2.html">Single Product_2</a></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                                <a href="#">Páginas</a>
                                <ul className="sub-menu">
                                    <li><a href="team.html">Team Members</a></li>
                                    <li className="menu-item-has-children">
                                        <Link to="/blog">Blog</Link>
                                        {/*<ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/contact">Fala connosco</Link></li>
                                    <li><a href="/404">404 Error</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">
                        <button className="search-bar-btn">
                            <i className="far fa-search" />
                        </button>
                        <button>
                            <i className="far fa-shopping-basket" />
                        </button>
                        
                        <a href="contact.html" className="theme-btn style-two">
                            INICIAR<i className="far fa-long-arrow-right" />
                        </a>
                        <div className="menu-sidebar">
                            <button>
                                <i className="far fa-ellipsis-h" />
                                <i className="far fa-ellipsis-h" />
                                <i className="far fa-ellipsis-h" />
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
                    <Route path="/product-details" element={<ProductDetails/>}/>
                    <Route path="/faqs" element={<Faqs/>}/>
                    <Route path="/contact" element={<Contacts/>}/>
                    <Route path="/404" element={<Error/>}/>
                    <Route path="/project-details" element={<ProjectDetails/>}/>
                </Routes>
            </Router>
        </>
    )
}