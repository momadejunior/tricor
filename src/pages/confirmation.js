import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function ConfirmationPage() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/shop'); // Redirect to the shop page or any other page
  };

  return (
    <section className="confirmation-page container pt-130 rpt-100 text-center">
      <h2 className="mb-4">Payment Successful!</h2>
      <DotLottieReact
      src="https://lottie.host/7d150406-4f4e-4ea6-91b4-2a591df42b64/jCE7CM2Ggd.json"
      loop
      autoplay
    />
      <p className="mt-4">Thank you for your purchase!</p>
      <button className="btn theme-btn mt-3" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
    </section>
  );
}
