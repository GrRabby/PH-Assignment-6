import './App.css'
import { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/states/State'
import DigitalToolsSection from './components/DigitalTools/DigitalToolsSection'
async function fetchproducts(){
    const res = await fetch("/data.json")
    return res.json()
}
function App() {
  const ProductsDataPromise = fetchproducts()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <DigitalToolsSection ProductsDataPromise={ProductsDataPromise}></DigitalToolsSection>
      </Suspense>
      
    </>
  )
}

export default App
