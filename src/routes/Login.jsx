import { useRef } from 'react';
import Pedido from './Pedido';

function Login() {
  
  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleSubmit = () => {
    if (user.current.value === 'henri' && password.current.value === '1234') {
      let token =
        Math.random().toString(20).substring(2) +
        Math.random().toString(20).substring(2);
      sessionStorage.setItem('userData', 'henri');
      sessionStorage.setItem('passwordData', token);
    } else {
      alert('Usuário e senha inválidos! Tente novamente.');
    }
  };

  return (
    <section>
      {!getUser ? (
      // Renderiza o h1 somente se não houver login
        <h1>Login</h1>
      ) : null}

      { !getSenha && !getUser ? (
        <form onSubmit={handleSubmit}>

          <p>
            Usuário:
            <input type="text" ref={user} />
          </p>

          <p> Senha:
            <input type="password" ref={password} />
            </p>

          <input type="submit" value="Login" />

        </form>
        ) : (
        <Pedido />
      )}
    </section>
  );
}

export default Login;
