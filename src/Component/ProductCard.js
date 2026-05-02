import React from 'react'

export default function ProductCard({ name, price, src }) {
  return (


    <div className="bg-white border border-yellow-500 p-4 w-full mx-auto rounded-2xl hover:scale-105 shadow-lg transition-transform duration-300">
      <img src={src} className='rounded-xl w-full' />
      <h3 className='p-8 text-2xl'>{name}</h3>
      <p className='text-yellow-600'>{price}</p>

    </div>



  )
}