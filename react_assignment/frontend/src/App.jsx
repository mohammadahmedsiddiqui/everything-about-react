import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Herosection from './Components/Herosection/Herosection'
import Productlist from './Components/Productlist/Productlist'
import Footer from './Components/Footer/Footer'
function App() {

  return (
  <>
<Navbar/>
<Herosection/>
<Productlist/>
<Footer/>
  </>
  )
}

export default App
