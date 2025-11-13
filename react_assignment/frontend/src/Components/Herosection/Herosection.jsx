import React from 'react'
import './Herosection.css'



const Herosection = () => {
  return (
<>

   <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Elevate Your Style with Premium <span className="text-blue-500">Leather Jackets </span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
       Handcrafted for comfort, durability, and timeless attitude — because real style never fades.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
         Shop Now
        </button>
        <button className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-lg transition">
        Explore Collection
        </button>
      </div>
    </section>


<h1 className='mt-6 text-5xl font-bold flex justify-center'>TRENDING PRODUCTS</h1>
</>
  )
}

export default Herosection
