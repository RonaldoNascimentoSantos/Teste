import React from 'react'
import Image from 'next/image'
import  Hb from '../../public/assets/hb.jpg'
import Link from 'next/link';


function Food() {
  return (


    <div>
        <div style={{padding:'5px', width:'600'}}>
            <h1>Comida</h1>
            <Image src={Hb} width='500' height='280'  alt='logo-médico'/> 
            <p>Querendo diversificar o seu cardápio e investir em hambúrguer artesanal no seu restaurante ou lanchonete?
            Então, você veio ao lugar certo!
          Neste texto, vamos explicar que hambúrguer é esse, que virou queridinho de quem ama sanduíche! Você vai conhecer quais suas características, como prepará-lo e dar um toque especial e pessoal a sua receita.
          Pronto para arrasar no hambúrguer artesanal? Continue lendo, anote tudo e coloque em prática já!</p>
            <Link href="/">
                <button>Voltar</button>
            </Link>
        </div>
    </div>
  )
}

export default Food;