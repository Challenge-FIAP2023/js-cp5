import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditarPedido() {
  
  const navigate = useNavigate();
  const { } = useParams();


  return (
    <div>
      <h1>Editar Pedido</h1>
      <button onClick={salvarPedidoEditado}>Salvar Pedido</button>
      <Link to="/pedidos">Voltar para Pedidos</Link>
    </div>
  );
}

export default EditarPedido;
