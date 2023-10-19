import {  } from 'react';
import { Link } from 'react-router-dom';
import baseStyle from './base.module.css';
import { HiPencil as Editar } from 'react-icons/hi';
import { BsFillTrash3Fill as Excluir } from 'react-icons/bs';

export const ListaProdutos = [
  {id: 1, nome: "Niguiri", quant: 6, desc:"Sushi de arroz com peixe fresco.", valor: 28.99 },
  {id: 2, nome: "Hot Roll", quant: 8, desc:"Sushi empanado com camarão e cream cheese.", valor: 22.99 },
  {id: 3, nome: "Guioza", quant: 8, desc:"Pastéis japoneses recheados de carne e legumes.", valor: 18.99 },
  {id: 4, nome: "Bowl", quant: 12, desc:"Rolinhos de alga nori com recheio de peixe e arroz.", valor: 29.99 },
];

function Pedido() {

  const ListaPedido = [
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
  ];

  return (  
    <>
      <section className={baseStyle.sectionContainer}>
        <h1>PEDIDO</h1>

        {ListaPedido.map((pedido) => (
          <div key={pedido.id}>
            <h2>Pedido ID: {pedido.id}

            <Link to={`/editar/pedido/${pedido.id}`}>
              <Editar />
            </Link>

            <Link to={`/excluir/pedido/${pedido.id}`}>
              <Excluir />
            </Link>

            </h2>
            
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Quantidade</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Preço (R$)</th>
                </tr>
              </thead>
              <tbody>
                {pedido.produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.quant}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.desc}</td>
                    <td>{produto.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <Link to={'/cadastrar/pedido'}>Cadastrar novo pedido</Link>
      </section>
    </>
  );
}

export default Pedido;