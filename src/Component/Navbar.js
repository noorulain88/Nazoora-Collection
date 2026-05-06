import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-blue-300'>
            <nav className=' p-5  flex text-black bg-stone-250 font-xs p-2 text-lg  border w-300 rounded-full ml-50 z-50 margin-left-2 justify-around  shadow-2xl fixed bg-neutral-100   font-medium transition-all duration-300'>



                <ul className='flex space-x-4 font-medium  '>

                    <a href="#home" className='hover:scale-105 font-bold text-2xl text-black '>Home</a>
                    <a href="#products" className='hover:scale-105 font-bold text-2xl  text-black '>Products</a>
                    <a href="#contact" className='hover:scale-105 font-bold text-2xl  text-black
                '>Contact</a>
                </ul>

            </nav>
        </div>
    )
}