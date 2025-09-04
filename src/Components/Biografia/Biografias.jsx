import React from 'react'
import iconArrow from '../../assets/icons/arrowPreta.svg'
import Watt from './Watt'
import Khwarizm from './Khwarizm'
import Marie from './Marie'
import Guttenberg from './Guttenberg'

const Biografias = () => {
  return (
    <section className='container mb-40 flex'>
      <button>
        <img src={iconArrow} alt="" className='rotate-180 w-16 hover:-translate-x-1 cursor-pointer transition text-black'/>
      </button>
      <div className='flex justify-around w-full '>
        <Khwarizm />
        <Watt />
        <Marie />
        <Guttenberg />
      </div>
      <button>
        <img src={iconArrow} alt="" className=' w-16 hover:translate-x-1 cursor-pointer transition text-black'/>
      </button>
    </section>
  )
}

export default Biografias