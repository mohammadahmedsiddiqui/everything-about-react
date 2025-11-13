import React from 'react'

const Navbar = () => {
  return (
    <>
     <header className="bg-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://lvhleather.com/wp-content/uploads/2024/04/LVH-LOGO-1-white-900x555.png"
            alt="logo"
            width="75"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-8 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-zinc-400">Home</a>
          <a href="#" className="hover:text-zinc-400">About</a>
          <a href="#" className="hover:text-zinc-400">Services</a>
          <a href="#" className="hover:text-zinc-400">Contact</a>
        </nav>
      </div>
    </header>
    </>





  )
}

export default Navbar
