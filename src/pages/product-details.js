import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [titulo, SetTitulo] = useState('');
    const [preco, SetPrice] = useState('');
    const [imagem, SetImage] = useState('');
    const [descricao, SetDescricao] = useState(''); // State for product description

    const { id } = useParams();

    const query = `query ProductoDetalhes($id: ID!) {
        productos(where: {id: $id}) {
            id
            imagemDoProducto {
                url
            }
            tituloDoProducto
            preco
            descricaoDoProducto {
                html
            }
            descricaoDoBadge
            badge
        }
    }`;

    const variables = {
        id: id     
    };

    const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables }),
        })
        .then(res => res.json())
        .then(data => {
            const resultado = data.data.productos[0];
            SetTitulo(resultado.tituloDoProducto);
            SetPrice(resultado.preco);
            SetImage(resultado.imagemDoProducto.url); // Save the image URL
            SetDescricao(resultado.descricaoDoProducto.html); // Set the product description
        })
        .catch(error => console.error("Error fetching product details:", error));
    }, [url, query, variables]);

    return (
        <>
            <section className="page-banner bgs-cover text-white pt-65 pb-75">
                <div className="container">
                    <div className="banner-inner">
                        <h2 className="page-title wow fadeInUp delay-0-2s">Single Product_01</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Single Product</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            
            <section className="product-details pt-130 rpt-100">
                <div className="container">
                    <div className="row align-items-center align-items-lg-start">
                        <div className="col-lg-5 col-9">
                            <div className="tab-content preview-images rmb-50 wow fadeInLeft delay-0-2s">
                                <div className="tab-pane fade preview-item active show" id="preview1">
                                    <img src={imagem || "assets/images/shop/preview1.jpg"} alt="Preview" />
                                </div>
                                <div className="tab-pane fade preview-item" id="preview2">
                                    <img src={imagem || "assets/images/shop/preview1.jpg"} alt="Preview" />
                                </div>
                                <div className="tab-pane fade preview-item" id="preview3">
                                    <img src={imagem || "assets/images/shop/preview1.jpg"} alt="Preview" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="nav flex-column thumb-images rmb-20">
                                <a href="#preview1" data-bs-toggle="tab" className="thumb-item active show">
                                    <img src={imagem || "assets/images/shop/thumb1.jpg"} alt="Thumb" />
                                </a>
                                <a href="#preview2" data-bs-toggle="tab" className="thumb-item">
                                    <img src={imagem || "assets/images/shop/thumb2.jpg"} alt="Thumb" />
                                </a>
                                <a href="#preview3" data-bs-toggle="tab" className="thumb-item">
                                    <img src={imagem || "assets/images/shop/thumb3.jpg"} alt="Thumb" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="product-details-content wow fadeInRight delay-0-2s">
                                <div className="section-title">
                                    <h2>{titulo}</h2>
                                </div>
                                <div className="ratting-price mb-30">
                                    <div className="ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="price">{preco}</span>
                                </div>
                                <hr className="mb-25"/>
                                <p dangerouslySetInnerHTML={{ __html: descricao }} /> {/* Product description */}
                                <hr className="mt-30"/>
                                <ul className="category-tags pt-10 pb-15">
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
                                <form action="#" className="add-to-cart pt-15">
                                    <input 
                                        type="number" 
                                        value="01" 
                                        min="1" 
                                        max="20" 
                                        onChange={e => { 
                                            if (parseInt(e.target.value, 10) < 10) e.target.value = '0' + e.target.value; 
                                        }} 
                                        required
                                    />
                                    <button type="submit" className="theme-btn">Add to Cart</button>
                                    <button className="wishlist"><i className="far fa-heart"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs product-information-tab mt-80 mb-40 wow fadeInUp delay-0-2s">
                        <li><a href="#details" data-bs-toggle="tab" className="active show">Descriptions</a></li>
                        <li><a href="#information" data-bs-toggle="tab">Information</a></li>
                        <li><a href="#vendorInfo" data-bs-toggle="tab">Vendor Info</a></li>
                        <li><a href="#review" data-bs-toggle="tab">Review (0)</a></li>
                    </ul>
                    <div className="tab-content pb-50 wow fadeInUp delay-0-2s">
                        <div className="tab-pane fade active show" id="details">
                            <p dangerouslySetInnerHTML={{ __html: descricao }} /> {/* Product description in details */}
                        </div>
                        <div className="tab-pane fade" id="information">
                            <p>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                            </p>
                            <ul className="list-style-one mt-25 mb-25">
                                <li>Direct monitoring of your favorite places from all parts of the world.</li>
                                <li>Talking and listening to the two ends. (Same Like Mobile)</li>
                                <li>Wide Angle and Long Length</li>
                                <li>Smart zooming point</li>
                                <li>HD quality video output.</li>
                                <li>Smart Alarming System</li>
                                <li>Power system 12 volts (without adapter)</li>
                            </ul>
                            <p>
                                Now wherever you are, wherever you are, you can easily monitor your CCTV videos through your mobile, tab, laptop or PC. 
                                With the wireless camera, you can view the camera from your mobile or computer to the right-left 0 to 360-degree video. 
                                Cover the flower room with a camera.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="vendorInfo">
                            <p>
                                All of our products are guaranteed to be of the highest quality and satisfaction. 
                                We are committed to providing our customers with the best possible service and support. 
                                Our dedicated team is here to help you with any questions or concerns you may have about your order.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="review">
                            <p>No review yet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
