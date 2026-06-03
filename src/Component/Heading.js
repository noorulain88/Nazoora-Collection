import React from 'react'

export default function Heading({heading,paragraph,headingClass,paragraphClass}) {
    return (
        <div className="p-2 text-center" id='products'>
            <div className=" flex text-center  justify-center">
                <h1 className={`text-3xl font-bold text-6xl   ${headingClass}`}>{heading}</h1>
            </div>

            <div className=" flex text-center p-8 justify-center">
                <p className={`text-xl ${paragraphClass}   w-160 `}> {paragraph}
                </p>
                {/* Carry everything you need in style with our chic and spacious tote bag, designed for both elegance and everyday convenience. More style, less spend */}
            </div>
            <div>

            </div>
        </div>
    )
}