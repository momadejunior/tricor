
import { useState } from "react";
import { Link } from "react-router-dom";



export function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Adicione aqui a lógica de autenticação, como chamar uma API
  };

  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-box">

          </div>
          <div className="col-md-6">
            <section className="login-form container rpt-100">
              <h2 className="text-center mb-50">Entrar</h2>
              <form onSubmit={handleLogin} className="form">
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
                <button type="submit" className="btn theme-btn w-100">
                  <Link to="/profile">Entrar</Link>
                </button>
                <p className="text-center mt-3">
                  Não tem uma conta? <Link to="/signup">Criar conta</Link>
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>

    </>
  );
}