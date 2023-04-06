import React from 'react'
import Image from 'next/image'
import  Imagem from '../../public/assets/imagem.jpg'
import Link from 'next/link';


function Assistencia() {
  return (


    <div>
        <div style={{padding:'5px', width:'600'}}>
            <h1>Assitência Médica</h1>
            <Image src={Imagem} width='500' height='250'  alt='logo-médico'/> 
            <p>A assistência médica nada mais é do que tratamentos de doenças, prevenções e cuidados com a saúde, por meio de serviços farmacêuticos, médicos e outras áreas da saúde. Ou seja, são todos aqueles serviços que visam promover mais saúde e bem-estar aos pacientes.</p>
            <Link href="/">
                <button>Voltar</button>
            </Link>
        </div>
    </div>
  )
}

export default Assistencia;