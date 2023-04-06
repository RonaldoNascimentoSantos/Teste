import React from 'react'
import Image from 'next/image'
import  Tecnologia from '../../public/assets/tecnologia.jpg'
import Link from 'next/link';


const Hardware= () => {
    return (
      <div>
              
      <div>
          <div style={{padding:'5px', width:'600'}}>
              <h1>Hardware</h1>
              <Image src={Tecnologia} width='500' height='280'  alt='logo-médico'/> 
              <p>Hardware é a parte física do computador, ou seja, o conjunto de aparatos eletrônicos, peças e equipamentos que fazem o computador funcionar. A palavra hardware pode se referir também como o conjunto de equipamentos acoplados em produtos que precisam de algum tipo de processamento computacional.</p>
              <Link href="/">
                  <button>Voltar</button>
              </Link>
          </div>
      </div>
      </div>
    )
  }
  
  export default Hardware;