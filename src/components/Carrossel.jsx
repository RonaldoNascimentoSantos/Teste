import React from 'react'
import Carousel from 'react-elastic-carousel'
import Tomate from '../../public/assets/tomate.jpg'
import Vegetal from '../../public/assets/vegetal.jpg'
import Frutas from '../../public/assets/frutas.jpg'
import Image from 'next/image'
const Carrossel = () => {

  return (
    <div>
      <Carousel itemsToShow={2}>
        <itemsToScroll>
          <div>
            <div>
              <Image
             
                src={Tomate}
                width="500"
                height="280"
                alt="Linha capilar"
              />
            </div>
            
            <div>
              <span>
               R$ 5,99
              </span>
            
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div>
            <div>
              <Image
             
                src={Frutas}
                width="500"
                height="280"
                alt="Linha capilar"
              />
            </div>
            
            <div>
              <span>
              r$9,99
              </span>
             
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div>
            <div>
              <Image
             
                src={Vegetal}
                width="500"
                height="280"
                alt="Linha capilar"
              />
            </div>
            
            <div>
              <span>
               R$ 4,00
              </span>
              
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div>
            <div>
              <Image
             
                src={Frutas}
                width="500"
                height="280"
                alt="Linha capilar"
              />
            </div>
            
            <div>
              <span>
              R$ 2,50
              </span>
              
            </div>
          </div>
        </itemsToScroll>
      </Carousel>
    </div>
  )
}

export default Carrossel