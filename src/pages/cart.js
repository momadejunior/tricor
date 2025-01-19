import { useContext } from 'react';
import { CartContext } from '../components/cartcontext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(id, newQuantity);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <section className="cart-page container pt-130 rpt-100">
      <h2 className="text-center mb-50">Carrinho de compras</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Seu carrinho está vazio!</p>
          <Link to="/shop" className="theme-btn">Continuar comprando</Link>
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt={item.name} className="cart-img" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="ms-3">{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      max="20"
                      className="form-control"
                      onChange={(e) => handleQuantityChange(e, item.id)}
                    />
                  </td>
                  <td>{item.price}MT</td>
                  <td>{(item.price * item.quantity).toFixed(2)}MT</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary text-end">
            <h4>Preço total: {getTotalPrice()}MT</h4>
            <div className="d-flex justify-content-end mt-3">
              <button onClick={clearCart} className="btn btn-outline-danger me-2">
              Limpar carrinho
              </button>
              <Link to="/checkout" className="btn theme-btn">
              Limpar carrinho
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
