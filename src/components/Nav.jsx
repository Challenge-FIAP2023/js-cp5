import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../assets/img/icon.png'

function Nav() {
  const navigate = useNavigate();

  const getUser = sessionStorage.getItem('userData');
  const getPassword = sessionStorage.getItem('passwordData');

  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('passwordData');
    alert("Saindo da sessão.");
    navigate('/');
  }

  return (
    <header>
      <div className={style.headerContent}>
        <div className={style.restaurantName}>
          <img src={logo} alt="Logo do restaurante" />
          <h2>Sakura Sushi Bar</h2>
        </div>
        <nav className={style.headerMenu}>
          <ul>
            <li><Link to="/" className={style.menuText}>Home</Link></li>
            <li><Link to="/sobre" className={style.menuText}>Sobre</Link></li>
            {getUser && getPassword ? (
              <>
                <li><Link to="/produtos" className={style.menuText}>Produtos</Link></li>
                <li><Link to="/login" className={style.menuText}>Pedido</Link></li>
                <li><button onClick={handleLogout} className={style.logoutBtn}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login" className={style.menuText}>Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;