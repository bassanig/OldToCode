import React from 'react'
import iconArrowDark from '../../../assets/icons/arrowDark.svg'
import iconArrowLight from '../../../assets/icons/arrowLight.svg'
import Watt from './Watt'
import Khwarizm from './Khwarizm'
import Marie from './Marie'
import Guttenberg from './Guttenberg'
import Titulo from '../../Global/Titulo'
import { GlobalContext } from '../../Global/Context/GlobalContext'

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
  const itemsVisiveis = 4; // Mostrando 4 biografias ao mesmo tempo

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

  // Cria dinamicamente os índices das biografias que devem ser mostradas
  const showedBios = biografias.slice(indexAtual, indexAtual + itemsVisiveis);

  const global = React.useContext(GlobalContext);

  return (
    <section className='container mb-40 flex flex-col overflow-hidden py-24'>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex mt-12 justify-between w-full items-center'>
        {/* Botão anterior */}
        <button onClick={anterior} className='z-10'>
          <img src={global.theme === 'light' ? iconArrowDark : iconArrowLight} alt="" className='rotate-180 w-16 hover:-translate-x-1 cursor-pointer transition'/>
        </button>

        {/* Biografias visíveis */}
        <div className='flex gap-12'  >
          {showedBios.map((bio, i) => (
            <div key={i}>
              {bio}
            </div>
          ))}
        </div>

        {/* Botão próximo */}
        <button onClick={proximo} className='z-10'>
          <img src={global.theme === 'light' ? iconArrowDark : iconArrowLight} alt="" className='w-16 hover:translate-x-1 cursor-pointer transition'/>
        </button>
      </div>
    </section>
  )
}

export default Biografias;