import React from 'react'
import ProductCard from './ProductCard'
import { Products } from '@/Data/Products'
import Heading from './Heading'


export default function ProductSection() {
    return (
        <div>
            <div>
                <Heading heading={"Featured Collection"} headingClass="text-yellow-600" paragraphClass="text-blue-400" paragraph={"Discover our latest arrivals and exclusive pieces that blend style and functionality."} />
            </div>


            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1  text-black text-center font-bold gap-4 rounded-3xl p-6" >
                {Products.map((item) => (
                    <ProductCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        src={item.image}


                    />

                ))}



            </div>
        </div>
    )
}