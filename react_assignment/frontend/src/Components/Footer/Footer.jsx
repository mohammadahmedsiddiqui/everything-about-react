import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
