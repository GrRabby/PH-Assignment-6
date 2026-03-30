import './App.css'
import { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import State from './components/states/State'
import DigitalToolsSection from './components/DigitalTools/DigitalToolsSection'
import GetStarted from './components/GetStartedSection/GetStarted'
import Pricing from './components/Pricing/Pricing'
import EndSection from './components/EndSection/EndSection'
import Footer from './components/footer/Footer'
async function fetchproducts(){
    const res = await fetch("/data.json")
    return res.json()
}
async function fetchprices(){
    const res = await fetch("/PriceData.json")
    return res.json()
}
function App() {
  const ProductsDataPromise = fetchproducts()
  const ProceDataPromise = fetchprices()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <State></State>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <DigitalToolsSection ProductsDataPromise={ProductsDataPromise}></DigitalToolsSection>
      </Suspense>
      <GetStarted></GetStarted>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <Pricing ProceDataPromise={ProceDataPromise}></Pricing>
      </Suspense>
      <EndSection></EndSection>
      <Footer></Footer>
    </>
  )
}

export default App
