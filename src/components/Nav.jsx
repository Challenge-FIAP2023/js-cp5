import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  const getUser = sessionStorage.getItem('userData');

  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('passwordData');
    alert("Saindo da sessão.");
    navigate('/');
  }

  return (
    <header>
      <h2>Sakura Sushi Bar</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          {getUser ? (
            <>
              <li><Link to="/pedido">Pedido</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;