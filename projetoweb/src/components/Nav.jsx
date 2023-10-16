// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Home from './routes/Home.jsx';

function Nav() {

  const handleLoginClick = () => {
    // Redirecionar para a tela de Pedido quando "Login" é clicado
    navigate('/pedido');
  };

  return (
    <nav>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
       
          <button onClick={handleLoginClick}>Login</button>
    </nav>
      
  );
}

export default Nav;
