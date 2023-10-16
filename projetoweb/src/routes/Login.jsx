import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Verifique se o nome de usuário e a senha correspondem
    if (username === 'Henri' && password === '1234') {
      // Defina o estado de login como verdadeiro
      setLoggedIn(true);

      // Armazene o estado de login na sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
    }
  };

  const handleLogout = () => {
    // Limpe o estado de login e a sessionStorage
    setLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Você está logado!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
