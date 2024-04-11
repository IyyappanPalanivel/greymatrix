import './App.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'
import { useState } from 'react'
import EnquiryModal from './components/EnquiryModal'

function App() {

  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };

  return (
    <>
      <Navbar toggleEnquiry={toggleEnquiry} />
      <Home toggleEnquiry={toggleEnquiry} />
      <Services />
      <About />
      <Products />
      <Portfolio toggleEnquiry={toggleEnquiry} />
      <Footer />
      <EnquiryModal showModal={showEnquiry} toggleModal={toggleEnquiry} />
    </>
  )
}

export default App
