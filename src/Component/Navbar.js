import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-blue-300'>
            <nav className=' p-4  flex text-black bg-stone-250 font-xs p-2 text-lg  margin-left-2 justify-around fixed w-full top-0  font-medium transition-all duration-300'>



                <ul className='flex space-x-4 font-medium  '>

                    <a href="#home" className='hover:scale-105 font-bold text-2xl text-yellow-500 '>Home</a>
                    <a href="#products" className='hover:scale-105 font-bold text-2xl  text-yellow-500  '>Products</a>
                    <a href="#contact" className='hover:scale-105 font-bold text-2xl  text-yellow-500
                '>Contact</a>
                </ul>

            </nav>
        </div>
    )
}