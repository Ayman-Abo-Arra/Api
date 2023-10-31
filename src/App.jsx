import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Products from './component/Products/Products.jsx'
import Home from './component/Home/Home.jsx'
import  Navbar  from './component/Navbar/Navbar'
import Piza from './component/Piza/Piza.jsx'
import Pagenotfound from './component/Pagenotfound/Pagenotfound'
import Pizzaid from './component/Pizzaid/Pizzaid'

export default function App() {
  return (
    <>
     <Navbar />
     <Routes>
     <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/Piza' element={<Piza />} />
      <Route path='/Piza1' element={<Pizzaid />} />
      <Route path='*' element={<Pagenotfound />} />


     </Routes>
    
    </>
  )
}
