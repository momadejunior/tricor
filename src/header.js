import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import About from './pages/about';
import Home from "./pages/Home";
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
import CartPage from "./pages/cart";
import { CartProvider } from "./components/cartcontext";
import CheckoutPage from "./pages/checkout";
import ConfirmationPage from "./pages/confirmation";
import Orcamento from "./pages/orcamento";
import tricor from './assets/images/logos/logo.png';

export default function Header() {
    const [countItem, setCountItem] = useState(0);

    useEffect(() => {
        let items = localStorage.getItem("cart");
        if (items) {
            let cartData = JSON.parse(items);
            setCountItem(cartData.length || 0); // Safely set count if cartData is valid
        }
    }, []);

    return (
        <>
            <div className="navbar-top navbar-top-style">
                <div className="container container-1570">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="topbar-left text-lg-start text-center">
                                <img src="./img/cell.png" className="flaticon-t-shirt icon-navbar" />
                                <b>+258 87 170 1039</b>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="topbar-right justify-content-center justify-content-lg-end">
                                <li>
                                    <img src="./img/user.png" className="flaticon-t-shirt icon-navbar" />
                                    <b>Minha Conta</b>
                                </li>
                                <li className="social-style-one">
                                    <img src="./img/list.png" className="flaticon-t-shirt icon-navbar" />
                                    <b>Meus pedidos</b>
                                </li>
                                <li className="social-style-one">
                                    <img src="./img/exit.png" className="flaticon-t-shirt icon-navbar" />
                                    <b>Seja Bem-vindo</b>
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
                                <button className="menu toggle-btn d-block d-lg-none" data-target="#Iitechie_main_menu" aria-expanded="false" aria-label="Toggle navigation">
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
                                    <li><Link to="/">Página Inicial</Link></li>
                                    <li><Link to="/about">Sobre</Link></li>
                                    <li><Link to="/services">Serviços</Link></li>
                                    <li><Link to="/contact">Fala connosco</Link></li>
                                </ul>
                            </div>
                            <div className="nav-right-part nav-right-part-desktop">
                                <button className="cart-btn-icon">
                                    <Link to="/cart">
                                        <i className="far fa-shopping-basket" />
                                        <span className="cart-badge">{countItem}</span>
                                    </Link>
                                </button>
                                <Link to="/shop" className="theme-btn style-two">
                                    Entrar na loja<i className="far fa-long-arrow-right" />
                                </Link>
                                <div className="menu-sidebar">
                                    <button>
                                        <Link to="https://api.whatsapp.com/send?phone=+258871701039&text=Ola%20Tricor." target="_blank">
                                            <img src="./img/wts.png" className="flaticon-t-shirt icon-social" />
                                        </Link>
                                    </button>
                                    <button>
                                        <Link to="https://web.facebook.com/profile.php?id=61566302444827" target="_blank">
                                            <img src="./img/fb.png" className="flaticon-t-shirt icon-social" />
                                        </Link>
                                    </button>
                                    <button>
                                        <Link to="https://www.linkedin.com/company/105152594/admin/dashboard/" target="_blank">
                                            <img src="./img/in.png" className="flaticon-t-shirt icon-social" />
                                        </Link>
                                    </button>
                                    <button>
                                        <Link to="https://www.instagram.com/ticor_printsolutions?igsh=YzljYTk1ODg3Zg==" target="_blank">
                                            <img src="./img/ig.png" className="flaticon-t-shirt icon-social" />
                                        </Link>
                                    </button>
                                    <button>
                                        <Link to="https://www.youtube.com/@TicorPrintSolution" target="_blank">
                                            <img src="./img/yt.png" className="flaticon-t-shirt icon-social" />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/service-details" element={<ServiceDetails />} />
                        <Route path="/blog-details" element={<BlogDetails />} />
                        <Route path="/team" element={<Teams />} />
                        <Route path="/product-details/:id" element={<ProductDetails />} />
                        <Route path="/faqs" element={<Faqs />} />
                        <Route path="/contact" element={<Contacts />} />
                        <Route path="/404" element={<Error />} />
                        <Route path="/project-details" element={<ProjectDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/confirmation" element={<ConfirmationPage />} />
                        <Route path="/orcamento" element={<Orcamento />} />
                    </Routes>
                </Router>
            </CartProvider>
        </>
    );
}
