import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Footer, Header} from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Footer/>
    </div>
  )
}

export default App