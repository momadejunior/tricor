import { useState } from "react";
import { Link } from "react-router-dom";



export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Signup:', { name, email, password });
    // Adicione aqui a lógica de registro, como chamar uma API
  };


  return (

    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-box">
          </div>

          <div className="col-md-6">
            <section className="signup-form container  rpt-100">
              <h2 className="text-center mb-50">Criar Conta</h2>
              <form onSubmit={handleSignup} className="form">
                <div className="mb-3">
                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Confirmar Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn theme-btn w-100">
                  Criar Conta
                </button>
                <p className="text-center mt-3">
                  Já tem uma conta? <Link to="/signin">Entrar</Link>
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}