import Link from 'next/link';
import { useState } from 'react';

function Lista() {
  // estado para armazenar os itens da lista
 

 
  const [itens, setItens] = useState([
    { id: 1, nome: 'Tomate R$ 2,99' },
    { id: 2, nome: 'Cebola R$ 5,99' },
    { id: 3, nome: 'Chuchu R$ 4,99' },
    { id: 4, nome: 'Batata R$ 7,99' },
    { id: 5, nome: 'Beterraba R$ 1,99' },
    { id: 6, nome: 'Cenoura R$ 3,50' },
  ]);
 
  // estado para armazenar o valor do input de edição
  const [novoNome, setNovoNome] = useState('');

  // estado para armazenar o ID do item que está sendo editado
  const [idEditando, setIdEditando] = useState(null);

  // função para lidar com a exclusão de um item
  function excluirItem(id) {
    setItens(itens.filter(item => item.id !== id));
  }

  // função para lidar com a edição de um item
  function editarItem(id, novoNome) {
    setItens(itens.map(item => {
      if (item.id === id) {
        return { ...item, nome: novoNome };
      } else {
        return item;
      }
    }));
    setIdEditando(null); // sair do modo de edição
    setNovoNome(''); // limpar o valor do input de edição
  }

  return (
    <div>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            {/* exibir o nome do item ou um input para edição */}
            {idEditando === item.id ? (
              <input
                type="text"
                value={novoNome}
                onChange={e => setNovoNome(e.target.value)}
              />
            ) : (
              item.nome
            )}

            {/* botão para entrar no modo de edição */}
            <button onClick={() => {
              setIdEditando(item.id);
              setNovoNome(item.nome);
            }}>Editar</button>

            {/* botão para excluir o item */}
            <button onClick={() => excluirItem(item.id)}>Excluir</button>

            {/* botão para salvar a edição */}
            {idEditando === item.id && (
              <button onClick={() => editarItem(item.id, novoNome)}>Salvar</button>
            )}
          </li>
        ))}
      </ul>
            
      <Link href="/">
                <button>Voltar</button>
            </Link>
            
      
    </div>
  );
}

export default Lista;