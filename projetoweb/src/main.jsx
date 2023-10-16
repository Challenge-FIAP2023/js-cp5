import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import App from './App.jsx'
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Produtos from './routes/Produtos.jsx';
import Pedido from './routes/Pedido.jsx';
import Sobre from './routes/Sobre.jsx';
import InserirProduto from './routes/InserirProduto.jsx';
import InserirPedido from './routes/InserirPedido.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Main() {
  return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/pedido" component={Pedido} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/inserir-produto" component={InserirProduto} />
          <Route path="/inserir-pedido" component={InserirPedido} />
          <Route path="/editar-produto" component={EditarProduto} />
          <Route path="/editar-pedido" component={EditarPedido} />
          <Route path="/excluir-produto" component={ExcluirProduto} />
          <Route path="/excluir-pedido" component={ExcluirPedido} />
        </Router>
      </div>
  );
}


export default Main;
