import React from 'react'
import iconArrowDark from '../../../assets/icons/arrowDark.svg'
import iconArrowLight from '../../../assets/icons/arrowLight.svg'
import Watt from './Watt'
import Khwarizm from './Khwarizm'
import Marie from './Marie'
import Guttenberg from './Guttenberg'
import Titulo from '../../Global/Titulo'
import { GlobalContext } from '../../Global/Context/GlobalContext'
import { NavLink } from 'react-router-dom'

const biografias = [
  <Watt />,
  <Marie />,
  <Khwarizm />,
  <Watt />,
  <Marie />,
  <Guttenberg />,
  <Watt />,
  <Marie />,
];

const Biografias = () => {
  const [indexAtual, setIndexAtual] = React.useState(2);
  const itemsVisiveis = 4; // 

  const proximo = () => {
    if (indexAtual < biografias.length - itemsVisiveis) {
      setIndexAtual(prev => prev + 1);
    }
  };

  const anterior = () => {
    if (indexAtual > 0) {
      setIndexAtual(prev => prev - 1);
    }
  };


  const showedBios = biografias.slice(indexAtual, indexAtual + itemsVisiveis);

  const global = React.useContext(GlobalContext);

  return (
    <>
      <section className='container mx-auto md:p-8 p-6 flex flex-col overflow-hidden py-24 px-4 md:px-0 '>
        <Titulo titulo={'home.biography.title'}/>
        <div className='flex mt-12 justify-between w-full items-center'>
          
          <button onClick={anterior} className='z-10 hidden'>
            <img src={global.theme === 'light' ? iconArrowDark : iconArrowLight} alt="" className='rotate-180 w-16 hover:-translate-x-1 cursor-pointer transition'/>
          </button>

          
          <div className='flex gap-12 pb-14 max-md:pb-4 container lg:flex-wrap justify-center w-full max-lg:overflow-scroll pl-25 max-sm:pl-90'  >
            {showedBios.map((bio, i) => (
              <div key={i}>,
                {bio}
              </div>
            ))}
          </div>

          
          <button onClick={proximo} className='z-10 hidden'>
            <img src={global.theme === 'light' ? iconArrowDark : iconArrowLight} alt="" className='w-16 hover:translate-x-1 cursor-pointer transition'/>
          </button>
        </div>

      </section>
      <div className='container w-full flex justify-center mb-24 '>
        <NavLink to='/biografias' className='bg-amarelo px-6 py-4 text-2xl font-bold rounded-2xl hover:bg-amarelo-escuro'>Veja Mais</NavLink>
      </div>
    </>
  )
}

export default Biografias;