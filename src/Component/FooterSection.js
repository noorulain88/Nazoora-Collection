import React from 'react'

export default function FooterSection() {
  return (
    <div className="bg-gray-700  text-white py-20 pt-20  mt-10 px-9 grid grid-cols-1 md:grid-cols-3 gap-8"id="contact">
             <h1 className='text-4xl p-4 text-center font-old'>Contact us</h1>
      <div>
   
        <h4 className="text-2xl font-bold text-yellow-500">Nazooza Collection</h4>
        <p>+923346539395</p>
      </div>
      <div className='font-semibold mb-4'>
        <h4 className="text-xl p-2  font-semibold text-yellow-500 ">Quick Links</h4>
        <ul>
          <li><a href="#" className="hover:text-blue-500 ">Home</a></li>
          <li><a href="#products" className="hover:text-blue-500 ">Products</a></li>
        </ul>
      </div>

      {/* <div className='font-semibold mb-4 '>
        <h4 className="flex justify-center space-x-4  text-yellow-500">Follow Us</h4>
        <a href='#' className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">📘</a>
        <a href='#' className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">🐦</a>
        <a href='#' className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">📸</a>
      </div> */}
      <div className="border-t  border-gray-800 pt-8">
        <p className="text-gray-400 justify-center text-yellow-500">&copy; 2026 <span className='font-lg text-white'>Nazoora Collection.</span> All rights reserved.</p>
      </div>

    </div>
  )
}