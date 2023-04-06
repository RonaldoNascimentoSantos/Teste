


import { useState } from 'react';
import PageHeader from '../pages/PageHeader';
import PageTitle from '../pages/PageTitle';
import Summary from '../pages/Summary';
import Produtos from '../pages/Produtos';

function TodoList() {
  const [produtos, setProdutos] = useState([]);

  // Função para adicionar um produto ao carrinho
  const adicionarProduto = (produto) => {
    const produtoExistente = produtos.find((p) => p.nome === produto.nome);
    if (produtoExistente) {
      // Se o produto já estiver no carrinho, atualiza a quantidade
      setProdutos(
        produtos.map((p) =>
          p.nome === produto.nome
            ? { ...p, quantidade: p.quantidade + produto.quantidade }
            : p
        )
      );
    } else {
      // Se o produto não estiver no carrinho, adiciona ao estado
      setProdutos([...produtos, produto]);
    }
  };

  // Função para remover um produto do carrinho
  const removerProduto = (produto) => {
    setProdutos(produtos.filter((p) => p.nome !== produto.nome));
  };

  // Função para alterar a quantidade de um produto no carrinho
  const alterarQuantidade = (produto, quantidade) => {
    setProdutos(
      produtos.map((p) =>
        p.nome === produto.nome ? { ...p, quantidade } : p
      )
    );
  };

  // Função para calcular o preço total dos itens no carrinho
  const calcularTotal = () => {
    const subTotal = produtos.reduce((total, p) => total + p.preco * p.quantidade, 0);
    if (cupom === 'DESCONTO10') {
      return subTotal * 0.9; // Aplica o desconto de 10%
    } else {
      return subTotal;
    }

  };

  // Estado para armazenar o cupom de desconto aplicado
  const [cupom, setCupom] = useState('');

  // Função para aplicar um cupom de desconto
  const aplicarCupom = (cupom) => {
    setCupom(cupom);
  };

  // Função para remover o cupom de desconto aplicado
  const removerCupom = () => {
    setCupom('');
  };

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {/* Renderiza a lista de produtos no carrinho */}
                {produtos.map((produto) => (
                  <Produtos
                    key={produto.nome}
                    produto={produto}
                    onRemoverProduto={() => removerProduto(produto)}
                    onAlterarQuantidade={(quantidade) =>
                      alterarQuantidade(produto, quantidade)
                    }
                  />
                ))}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary
              total={calcularTotal()}
              cupom={cupom}
              onAplicarCupom={aplicarCupom}
              onRemoverCupom={removerCupom}
              />
          </aside>
        </div>
        </main>
  </>
  );
}
              
export default TodoList;