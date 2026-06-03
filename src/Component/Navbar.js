import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-blue-300'>
            <nav className=' p-5 bg-gradient-to-r from-blue-500 to-yellow-600  text-white bg-stone-250 font-xs p-2 text-lg  border    w-full    rounded-full   z-50    justify-around  shadow-2xl fixed  bg-neutral-100   font-medium transition-all duration-300'>



                <ul className='flex space-x-4 justify-center  text-white font-medium '>

                    <a href="#home" className='hover:scale-105 font-bold text-2xl  '>Home</a>
                    <a href="#products" className='hover:scale-105 font-bold text-2xl  '>Products</a>
                    <a href="#contact" className='hover:scale-105 font-bold text-2xl'>Contact</a>
                </ul>

            </nav>
        </div>
    )
}