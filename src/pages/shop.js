import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactUS from "../components/contact-us";
import { CartContext } from '../components/cartcontext';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext); // Use CartContext to access addToCart function

  const url = "https://us-west-2.cdn.hygraph.com/content/cm1z3ff5507ct08w75zh4fqp0/master";
  const query = `
   query Products {
      productos {
        id
        tituloDoProducto
        descricaoDoProducto {
          html
        }
        imagemDoProducto {
          url
        }
        badge
        descricaoDoBadge
        preco
      }
    }
  `;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const { data } = await response.json();
        setProducts(data.productos);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="page-banner bgs-cover text-white pt-65 pb-75" style={{ backgroundImage: 'url(assets/images/loja.png)' }}>
        <div className="container">
          <div className="banner-inner">
            <h2 className="page-title wow fadeInUp delay-0-2s">Loja</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Loja</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="product-area py-130">
        <div className="container">
          <div className="shop-shorter rel z-3 mb-30 wow fadeInUp delay-0-2s">
            <form action="#" className="default-search-form">
              <input type="text" placeholder="Search" required />
              <button type="submit" className="searchbutton far fa-search"></button>
            </form>
            <div className="sort-text">
              Showing 1 - {products.length} of {products.length} Results
            </div>
            <div className="products-dropdown">
              <select>
                <option value="default" selected>Sort by Newness</option>
                <option value="old">Sort by Oldest</option>
                <option value="high-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
              </select>
            </div>
            <ul className="grid-list">
              <li><a href="#"><i className="far fa-list"></i></a></li>
              <li><a href="#"><i className="fal fa-border-all"></i></a></li>
            </ul>
          </div>
          <div className="row justify-content-center">
            {products.map(product => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    {product.badge && product.descricaoDoBadge && (
                      <span className={`badge ${product.badge}`}>{product.descricaoDoBadge}</span>
                    )}
                    <img src={product.imagemDoProducto.url} alt={product.tituloDoProducto} />
                  </div>
                  <div className="content">
                    <div className="title-price">
                      <h5><Link to="/product-details">{product.tituloDoProducto}</Link></h5>
                      <div className="price">{product.preco ? `${product.preco} MT` : 'Price not available'}</div>
                    </div>
                    <div className="social-style-two">
                      {/* Add to Cart Button */}
                      <a
                        onClick={() =>
                          addToCart(
                            {
                              id: product.id,
                              name: product.tituloDoProducto,
                              price: product.preco,
                              image: product.imagemDoProducto.url,
                            },
                            1 // Quantity
                          )
                        }
                        className="cart-btn"
                      >
                        <i className="far fa-shopping-cart"></i>
                      </a>
                      <a href="#"><i className="far fa-heart"></i></a>
                      <Link to={`/product-details/${product.id}`}><i className="far fa-eye"></i></Link>
                      <a href="#"><i className="far fa-star"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination flex-wrap justify-content-center pt-20">
            <li className="page-item disabled">
              <span className="page-link"><i className="fas fa-chevron-left"></i></span>
            </li>
            <li className="page-item active">
              <span className="page-link">01</span>
            </li>
            <li className="page-item"><a className="page-link" href="#">02</a></li>
            <li className="page-item"><a className="page-link" href="#">03</a></li>
            <li className="page-item"><a className="page-link" href="#">04</a></li>
            <li className="page-item">
              <a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a>
            </li>
          </ul>
        </div>
      </section>

      <ContactUS />
    </>
  );
}
