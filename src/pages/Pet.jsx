import React from 'react'
import Image from 'next/image'
import  Animais from '../../public/assets/Animais.jpg'
import Link from 'next/link';



const Pet= () => {
  return (
    <div>
            
    <div>
        <div style={{padding:'5px', width:'600'}}>
            <h1>Pet</h1>
            <Image src={Animais} width='500' height='300'  alt='logo-médico'/> 
            <p>O que todo pet precisa?
                <br /><br />
            Entre os itens essenciais para o enxoval do cãozinho estão a coleira, ração, comedouro, bebedouro, tapete higiênico, escova e pasta de dente, itens para o banho, escova para pelos, brinquedos, caminha, casinha e caixa de transporte.</p>
            <Link href="/">
                <button>Voltar</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Pet;
