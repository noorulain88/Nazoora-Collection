import React from 'react'

export default function Header() {
    return (
        <div className=" h-[100vh] bg-[url('/images/images3.jpg')] bg-contain bg-left flex items-center text-black" id="home">
            <h1 className="text-5xl ml-10 pl-60  text-center  md:text-7xl lg:text-8xl font-bold text-white  ">
                    
               Nazoora Collection
                {/* <span className="block m-auto bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                    Style
                </span> */}
            </h1>
            <p className="text-lg text-white max-w-2xl mt-100 pl-20  mx-auto">
                Our latest bag collection blends style and functionality, offering trendy designs perfect for everyday use. From elegant handbags to spacious totes, each piece is crafted to complement your look while keeping your essentials organized.

             
            </p>
            {/* <span>" h-[100vh] bg-[url('/images/images6.jpg')] bg-contain bg-center flex items-center text-black/// container mx-auto px-4 py-16 text-center text-center  "</span> */}
        </div>
    )
}