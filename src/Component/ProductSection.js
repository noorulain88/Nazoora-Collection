import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '@/Data/Products'


export default function ProductSection() {
  return (
      <div className="grid grid-cols-3 text-black text-center font-bold gap-4 rounded-3xl">
            {Products.map((item) => (
                <ProductCard
                 key={item.id}
                    name={item.name}
                    price={item.price}
                    src={item.image}
                />
            ))}
        </div>
  )
}