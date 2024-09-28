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
                                <img src="./img/cell.png" className="flaticon-t-shirt icon-navbar"/>
                                <b>+258 84 678 6350 </b>
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
                       <Link className="search-bar-btn" href="#">
                            <i className="far fa-search" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="Iitechie_main_menu">
                        <ul className="navbar-nav menu-open text-lg-end">
                            <li className="menu-item-has-children">
                                <Link to="/">Página Inicial</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link href="index.html">Home One</Link></li>
                                    <li><Link href="index2.html">Home Two</Link></li>
                                    <li><Link href="index3.html">Home Three</Link></li>
                                </ul>*/}
                            </li>
                            <li><Link to="/about">Sobre</Link></li>
                            <li className="menu-item-has-children">
                                <Link to="/services">Serviços</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link href="services.html">Services One</Link></li>
                                    <li><Link href="services2.html">Services Two</Link></li>
                                    <li><Link href="service-details.html">Service Details</Link></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                                <Link to="/projects">Projetos</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link href="projects.html">Projects</Link></li>
                                    <li><Link href="project-details.html">Projects Details</Link></li>
                                </ul>
                            </li> */}
                            <li className="menu-item-has-children">
                                <Link to="/shop">Loja</Link>
                                {/*<ul className="sub-menu">
                                    <li><Link href="shop.html">Shop One</Link></li>
                                    <li><Link href="shop2.html">Shop Two</Link></li>
                                    <li><Link href="shop3.html">Shop Three</Link></li>
                                    <li><Link href="product-details.html">Single Product_1</Link></li>
                                    <li><Link href="product-details2.html">Single Product_2</Link></li>
                                </ul>*/}
                            </li>
                            <li className="menu-item-has-children">
                            <li><Link to="/contact">Fala connosco</Link></li>
                                {/*<ul className="sub-menu">
                                    <li><Link href="shop.html">Shop One</Link></li>
                                    <li><Link href="shop2.html">Shop Two</Link></li>
                                    <li><Link href="shop3.html">Shop Three</Link></li>
                                    <li><Link href="product-details.html">Single Product_1</Link></li>
                                    <li><Link href="product-details2.html">Single Product_2</Link></li>
                                </ul>*/}
                            </li>
                            {/* <li className="menu-item-has-children">
                               <link href="#">Páginas</Link>
                                <ul className="sub-menu">
                                    <li><Link href="team.html">Team Members</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link to="/blog">Blog</Link>
                                        {/*<ul className="sub-menu">
                                            <li><Link href="blog.html">Blog</Link></li>
                                            <li><Link href="blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/contact">Fala connosco</Link></li>
                                    <li><Link href="/404">404 Error</Link></li>
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
                        
                       <Link href="contact.html" className="theme-btn style-two">
                            Entrar na loja<i className="far fa-long-arrow-right" />
                        </Link>
                        <div className="menu-sidebar">
                            <button>
                                <img src="./img/wts.png" className="flaticon-t-shirt icon-social"/>
                            </button>

                            <button>
                                <img src="./img/fb.png" className="flaticon-t-shirt icon-social"/>
                            </button>

                            <button>
                                <img src="./img/in.png" className="flaticon-t-shirt icon-social"/>
                            </button>

                            <button>
                                <img src="./img/ig.png" className="flaticon-t-shirt icon-social"/>
                            </button>

                            <button>
                                <img src="./img/yt.png" className="flaticon-t-shirt icon-social"/>
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