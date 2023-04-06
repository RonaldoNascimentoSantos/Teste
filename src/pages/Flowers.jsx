import React from 'react'
import Image from 'next/image'
import  Flores from '../../public/assets/flores.jpg'
import Link from 'next/link';



const Flowers= () => {
    return (
      <div>
              
      <div>
          <div style={{padding:'5px', width:'600'}}>
              <h1>Flores</h1>
              <Image src={Flores} width='500' height='250'  alt='logo-médico'/> 
              <p>Podes cortar todas as flores mas não podes impedir a Primavera de aparecer.” “A neve e a tempestade matam as flores, mas nada podem contra as sementes.” “Um pouco de perfume sempre fica na mão de quem oferece flores.” “Todos querem o perfume das flores, mas poucos sujam as suas mãos para cultivá-las.”</p>
              <Link href="/">
                  <button>Voltar</button>
              </Link>
          </div>
      </div>
      </div>
    )
  }
  
  export default Flowers;