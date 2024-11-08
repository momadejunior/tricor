import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../components/cartcontext";

export default function ProductDetails() {
    const [titulo, SetTitulo] = useState('');
    const [preco, SetPrice] = useState('');
    const [imagem, SetImage] = useState('');
    const [descricao, SetDescricao] = useState('');
    const [quantity, setQuantity] = useState(1); // State to manage quantity

    const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
    const { id } = useParams(); // Get product ID from URL

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
        }
    }`;

    const variables = { id };
    const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";

    // Fetch product details when component mounts or when the id changes
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables }),
        })
            .then(res => res.json())
            .then(data => {
                const product = data.data.productos[0];
                SetTitulo(product.tituloDoProducto);
                SetPrice(product.preco);
                SetImage(product.imagemDoProducto.url);
                SetDescricao(product.descricaoDoProducto.html);
            })
            .catch(error => console.error("Error fetching product details:", error));
    }, [url, query, variables]);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart({
            id,
            name: titulo,
            price: preco,
            image: imagem,
            quantity,
        }); // Add product to cart with quantity
    };

    return (
        <>
            <section className="page-banner bgs-cover text-white pt-65 pb-75" style={{ backgroundImage: 'url(assets/images/loja.png)' }}>
                <div className="container">
                    <div className="banner-inner">
                        <h2 className="page-title wow fadeInUp delay-0-2s">{titulo || "Product"}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">{titulo || "Single Product"}</li>
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
                                {/* Additional preview images */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="nav flex-column thumb-images rmb-20">
                                <a href="#preview1" data-bs-toggle="tab" className="thumb-item active show">
                                    <img src={imagem || "assets/images/shop/thumb1.jpg"} alt="Thumb" />
                                </a>
                                {/* Additional thumbnail images */}
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
                                    <span className="price">{preco ? `${preco} MT` : "Price not available"}</span>
                                </div>
                                <hr className="mb-25" />
                                <p dangerouslySetInnerHTML={{ __html: descricao }} />
                                <hr className="mt-30" />
                                <ul className="category-tags pt-10 pb-15">
                                    <li>
                                        <b>Category</b><span>:</span>
                                        <a href="#">Printing</a><a href="#">Design</a><a href="#">Branding</a>
                                    </li>
                                    <li>
                                        <b>Tags</b><span>:</span>
                                        <a href="#">Shop</a><a href="#">eCommerce</a><a href="#">Electronics</a>
                                    </li>
                                </ul>
                                <hr />
                                <form onSubmit={handleAddToCart} className="add-to-cart pt-15">
                                    <input
                                        type="number"
                                        value={quantity}
                                        min="1"
                                        max="20"
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        required
                                    />
                                    <button type="submit" className="theme-btn">Add to Cart</button>
                                    <button type="button" className="wishlist"><i className="far fa-heart"></i></button>
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
                            <p dangerouslySetInnerHTML={{ __html: descricao }} />
                        </div>
                        <div className="tab-pane fade" id="information">
                            <p>Information about the product goes here...</p>
                        </div>
                        <div className="tab-pane fade" id="vendorInfo">
                            <p>Vendor information goes here...</p>
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
