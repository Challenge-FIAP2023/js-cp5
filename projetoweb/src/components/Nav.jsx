// Nav.jsx
import { } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  // Hook - useNavigate
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirecionar para a tela de Pedido quando "Login" é clicado
    navigate('/pedido');
  }

  return (
    <>

    <header>
      <h2>Sakura Sushi Bar</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>
          <button onClick={handleLoginClick}>Login</button>
        </ul>
      </nav>
    </header>
      
      
    
    
    </>
      
  );
}

export default Nav;
