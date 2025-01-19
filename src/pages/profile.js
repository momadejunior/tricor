import { useContext } from 'react';
import { UserContext } from '../components/usercontext'; // Um contexto para gerenciar os dados do usuário
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const { userDetails, updateUserDetails } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <section className="profile-page container pt-130 rpt-100">
      <h2 className="text-center mb-50">Meu Perfil</h2>

      {userDetails ? (
        <div className="profile-details">
          <div className="row">
            <div className="col-md-6">
              <label>Nome</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                className="form-control mb-3"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                className="form-control mb-3"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <label>Endereço</label>
              <textarea
                name="address"
                value={userDetails.address}
                className="form-control mb-3"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="text-end">
            <button className="btn theme-btn" onClick={() => alert('Informações atualizadas!')}>
              Salvar Alterações
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Informações do perfil não disponíveis!</p>
          <Link to="/" className="theme-btn">
            Voltar para a página inicial
          </Link>
        </div>
      )}
    </section>
  );
}
