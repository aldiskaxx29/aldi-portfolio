import React, { useContext } from 'react'
import { Contex } from './context/MyContext'

const App = () => {
  const {produk, setProduk} = useContext(Contex);
  console.log('pr', produk);

  const handleClick = () => {
    const filter = produk.filter(item => item.id != 1);
    setProduk(filter);
    console.log('klik', produk, filter);
  }
  
  return (
    <div>
      <div className='text-black'>APP</div>
      <button onClick={handleClick} className='p-2 bg-red-500 text-normal font-bold rounded-sm'>KLIK</button>
    </div>
  )
}

export default App
