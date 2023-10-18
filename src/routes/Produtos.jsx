import {  } from 'react';
import { Link } from 'react-router-dom';
import { HiPencil as Editar } from 'react-icons/hi';
import { BsFillTrash3Fill as Excluir } from 'react-icons/bs';
import { ListaProdutos } from '../components/ListaProdutos';

function Produtos() {

 

  return (
    <>
      <section>
        <h1>Produtos</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Quantidade</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Editar / Excluir</th>
              </tr>
            </thead>
            <tbody>

              {ListaProdutos.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.quant}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    <Link to={`/editar/produtos/${item.id}`}>
                      <Editar />
                    </Link>
                    <Link to={`/excluir/produtos/${item.id}`}>
                      <Excluir />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={'/cadastrar/produto'}>Cadastrar novo produto</Link>
        </div>
      </section>
    </>
  )
}

export default Produtos
