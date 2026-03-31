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
import { ToastContainer } from "react-toastify";
async function fetchproducts(){
    const res = await fetch(import.meta.env.BASE_URL + "data.json")
    return await res.json()
}
async function fetchprices(){
    const res = await fetch(import.meta.env.BASE_URL + "PriceData.json")
    return await res.json()
}
const ProductsDataPromise = fetchproducts()
const ProceDataPromise = fetchprices()

function App() {
  const [selectedProducts,setSelectedProducts] = useState([])
  return (
    <>
      <Navbar selectedProducts={selectedProducts}></Navbar>
      <Banner></Banner>
      <State></State>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <DigitalToolsSection selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} ProductsDataPromise={ProductsDataPromise}></DigitalToolsSection>
      </Suspense>
      <GetStarted></GetStarted>
      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <Pricing ProceDataPromise={ProceDataPromise}></Pricing>
      </Suspense>
      <EndSection></EndSection>
      <Footer></Footer>
      <ToastContainer/>
    </>
  )
}

export default App
