
import React, { useState } from 'react';

const Summary = ({ total, cupom, onAplicarCupom, onRemoverCupom }) => {
  const [cupomInput, setCupomInput] = useState('');

  const handleCupomInput = (event) => {
    setCupomInput(event.target.value);
  };

  const handleAplicarCupom = () => {
    onAplicarCupom(cupomInput);
  };

  const handleRemoverCupom = () => {
    onRemoverCupom();
  };

  return (
      <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            {cupom ? (
              <>
                <span>Cupom: {cupom}</span>
                <button onClick={handleRemoverCupom}>Remover</button>
              </>
            ) : (
              <>
                <input
                  type='text'
                  placeholder='Digite o código do cupom'
                  value={cupomInput}
                  onChange={handleCupomInput}
                />
                <button onClick={handleAplicarCupom}>Aplicar</button>
              </>
            )}
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ {(total * 0.9).toFixed(2)}</span>
        </footer>
      </div>
      <button>Finalizar Compra</button>
    </>
  );
};

export default Summary;