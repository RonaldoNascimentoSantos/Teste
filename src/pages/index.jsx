import Link from 'next/link';
import React from 'react'
import Carrossel from '../components/Carrossel';
import Fruta from '../../public/assets/frutas.jpg'
import Image from 'next/image';
import { useState } from 'react';
import Tomate from '../../public/assets/tomate.jpg'
import Bebidas from '../../public/assets/bebidas.jpg'






const Home = () => {
  return (

    <div>
      <div>
        <header className='header'>
          <h1>Meus Produtos</h1>


        </header>
      </div>

      <br /><br />
      <div>

        <h2>Categorias</h2>
        <nav>
          <ul>
            <Link href="/Assistencia"> <li>Assitência Médica</li></Link>
            <Link href="/Food"><li>Comida </li></Link>
            <Link href="/Pet"><li>Pet</li></Link>
            <Link href="Hardware"> <li> Hardware</li></Link>
            <Link href="Flowers"><li> Flores</li></Link>
            <Link href="Gardens"><li>Jardins </li></Link>
           
            <Link href="TodoList"><li>Comprar</li></Link>
            

          </ul>
        </nav>

      </div>

      <div>
        <div>
          <Image src={Fruta} width='500' height='280' alt='fruta' />
        </div>

        <div>

          <span>R$9,99</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, suscipit commodi. Quis velit commodi debitis alias eveniet molestias, illo rerum ut enim dolore reiciendis placeat id perferendis magni ipsa? Ullam?</p>
       
                <button>Comprar</button>
            
        </div>
      </div>
      <Carrossel />
      <div>
        <div>
          <div>
           
          </div>

          <div>

            <span>R$9,99</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, suscipit commodi. Quis velit commodi debitis alias eveniet molestias, illo rerum ut enim dolore reiciendis placeat id perferendis magni ipsa? Ullam?</p>
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <div>
            <div>
             
            </div>
            <Image src={Bebidas} width='500' height='280' alt='fruta' />
            <div>

             <h2>Melhores Bebidas</h2>

              <button>Grátis</button>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, suscipit commodi. Quis velit commodi debitis alias eveniet molestias, illo rerum ut enim dolore reiciendis placeat id perferendis magni ipsa? Ullam?</p>
            </div>
          </div>
        </div>
      </div>
      <div><p>My Custmer</p></div>
    </div>




  )
}

export default Home; 