import {  } from 'react';
import { Link } from 'react-router-dom';
import { HiPencil as Editar } from 'react-icons/hi';
import { BsFillTrash3Fill as Excluir } from 'react-icons/bs';
import baseStyle from './base.module.css';

export const ListaProdutos = [
  {id: 1, nome: "Niguiri", quant: 6, desc:"Sushi de arroz com peixe fresco.", valor: 28.99 },
  {id: 2, nome: "Hot Roll", quant: 8, desc:"Sushi empanado com camarão e cream cheese.", valor: 22.99 },
  {id: 3, nome: "Guioza", quant: 8, desc:"Pastéis japoneses recheados de carne e legumes.", valor: 18.99 },
  {id: 4, nome: "Bowl", quant: 12, desc:"Rolinhos de alga nori com recheio de peixe e arroz.", valor: 29.99 },
];

function Produtos() {


  return (
    <>
      <section className={baseStyle.sectionContainer}>
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
                <th>Editar</th>
                <th>Excluir</th>
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
                    <Link to={`/editar/produto/${item.id}`}>
                      <Editar />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/excluir/produto/${item.id}`}>
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
