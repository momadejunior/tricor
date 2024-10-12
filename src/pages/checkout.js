import { useContext, useState } from 'react';
import { CartContext } from '../components/cartcontext';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the form submission,
    // like sending the data to an API or processing the order.
    console.log('Order submitted:', formData);
    clearCart(); // Clear the cart after checkout
    navigate('/confirmation'); // Redirect to confirmation page
  };

  return (
    <section className="checkout-page container pt-130 rpt-100">
      <h2 className="text-center mb-50">Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty!</p>
          <Link to="/shop" className="theme-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <h4>Order Summary:</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}MT</td>
                    <td>{(item.price * item.quantity).toFixed(2)}MT</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="checkout-summary text-end">
              <h4>Total Price: {getTotalPrice()}MT</h4>
              <button type="submit" className="btn theme-btn mt-3">
                Confirm Order
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
