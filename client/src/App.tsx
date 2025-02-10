import { useState } from 'react'
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Container/>
    <Footer/>
    
    </>
  )
}

export default App
