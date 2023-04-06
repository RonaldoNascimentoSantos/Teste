import React from 'react'
import Image from 'next/image'
import  Jardim from '../../public/assets/jardim.jpg'
import Link from 'next/link';



const Gardens= () => {
    return (
      <div>
              
      <div>
          <div style={{padding:'5px', width:'600'}}>
              <h1>Jardim</h1>
              <Image src={Jardim} width='500' height='280'  alt='logo-médico'/> 
              <p>O segredo é não correr atrás das borboletas... É cuidar do jardim para que elas venham até você.</p>
              <Link href="/">
                  <button>Voltar</button>
              </Link>
          </div>
      </div>
      </div>
    )
  }
  
  export default Gardens;