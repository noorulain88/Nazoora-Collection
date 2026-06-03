import React from 'react'
import Heading from './Heading'

export default function Header() {
    return (
      
        <div className=" display-flex grid-cols-2  h-[100vh] bg-[url('/Images/images3.jpg')] bg-contain bg-left  pt-24 items-center text-black" id="shopCollection">
            <div>
            <Heading heading={"Nazoora Collection"} headingClass="text-white" paragraphClass="text-white" paragraph={"Our latest bag collection blends style and functionality, offering trendy designs perfect for everyday use. From elegant handbags to spacious totes, each piece is crafted to complement your look while keeping your essentials organized."} />
            </div>


        </div>
    )
}