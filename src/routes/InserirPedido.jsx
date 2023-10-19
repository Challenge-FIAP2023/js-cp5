import { useState } from 'react';
import { ListaProdutos } from './Produtos.jsx';
import { ListaPedidosOG } from './Pedido.jsx';
import { useNavigate } from 'react-router-dom';
import baseStyle from './base.module.css';

function InserirPedido() {
  const navigate = useNavigate();

  // Lista de pedidos (suponhamos que ela esteja em um contexto global)
  const ListaPedidos = useState([
    {
      id: 1,
      produtos: [
        { id: ListaProdutos[0].id, nome: ListaProdutos[0].nome, quant: ListaProdutos[0].quant, desc: ListaProdutos[0].desc, valor: ListaProdutos[0].valor },
        { id: ListaProdutos[1].id, nome: ListaProdutos[1].nome, quant: ListaProdutos[1].quant, desc: ListaProdutos[1].desc, valor: ListaProdutos[1].valor },
      ],
    },
    {
      id: 2,
      produtos: [
        { id: 3, nome: "Guioza", quant: 8, desc: "Pastéis japoneses recheados de carne e legumes.", valor: 18.99 },
      ],
    },
  ]);

  const novoId = ListaPedidos.length > 0 ? ListaPedidos[ListaPedidos.length - 1].id + 1 : 1;

  const [pedido, setPedido] = useState({
    id: novoId,
    produtos: [],
  });

  const [produtoSelecionado, setProdutoSelecionado] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);

  const adicionarProduto = () => {
    const produtoEncontrado = ListaProdutos.find((produto) => produto.id === parseInt(produtoSelecionado));
    if (produtoEncontrado) {
      const produtoParaAdicionar = {
        id: produtoEncontrado.id,
        nome: produtoEncontrado.nome,
        quant: quantidadeProduto,
        desc: produtoEncontrado.desc,
        valor: produtoEncontrado.valor,
      };

      const novoPedido = { ...pedido, produtos: [...pedido.produtos, produtoParaAdicionar] };
      setPedido(novoPedido);

      setProdutoSelecionado('');
      setQuantidadeProduto(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione o pedido à lista de pedidos
    setListaPedidos([...ListaPedidosOG, pedido]);
    navigate('/pedidos');
  };

  return (
    <>
      <section className={baseStyle.sectionContainer}>
        <h1>Cadastro de Pedidos</h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>PEDIDO</legend>
            <p>
              <label htmlFor="idProdutos">Produtos:</label>
              <select
                name="produtos"
                id="idProdutos"
                value={produtoSelecionado}
                onChange={(e) => setProdutoSelecionado(e.target.value)}
              >
                <option value="">Selecione um produto</option>
                {ListaProdutos.map((produto) => (
                  <option key={produto.id} value={produto.id}>
                    {produto.nome}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="quantidadeProduto"
                value={quantidadeProduto}
                onChange={(e) => setQuantidadeProduto(parseInt(e.target.value, 10))}
              />
              <button type="button" onClick={adicionarProduto}>
                Adicionar Produto
              </button>
            </p>
            <p>
              <strong>Produtos Adicionados:</strong>
              <ul>
                {pedido.produtos.map((produto) => (
                  <li key={produto.id}>
                    {produto.nome} - Quantidade: {produto.quant}
                  </li>
                ))}
              </ul>
            </p>
            <p>
              <button type="submit">Salvar Pedido</button>
            </p>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default InserirPedido;
