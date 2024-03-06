import React, { createContext, useEffect, useState } from 'react'

const Contex = createContext();

const Provider = ({children}) => {
  const [produk, setProduk] = useState([]);

  const fetchProduk = async () => {
    await fetch('https://fakestoreapi.com/products').then(response => {
      if(!response.ok){
        throw new Error('Network error')
      }

      return response.json();
    }).then(data => {
      setProduk(data);
    })
  }

  useEffect(() => {
    fetchProduk()
  }, [])

  return (
    <Contex.Provider value={{ produk, setProduk }}>
      {children}
    </Contex.Provider>
  )
}


export {Contex, Provider};