import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';


function Inserir() {
  
  const navigate = useNavigate();

  
  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    quant:'',
    desc: '',
    valor: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section>
      <h1>Cadastro de Produtos</h1>
      {/*chando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO</legend>
          <p>
            <label htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={produto.nome}
              
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idQuant"> Quantidade do Produto:</label>
            <input
              type="number"
              name="quant"
              id="idQuant"
           
              value={produto.quant}
              
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              
              value={produto.desc}
             
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              
              value={produto.valor}
             
              onChange={handleChange}
            />
          </p>
          <p>
            <button type="submit">
              CADASTRAR
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
export default Inserir;
