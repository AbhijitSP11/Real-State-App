import './App.css'
import About from './components/AboutUs'
import Explore from './components/Explore'
import Featured from './components/Featured'
import FooterComp from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Service from './components/Service'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Explore/>
      <Featured/>
      <Reviews/>
      <FooterComp/> 
    </div>
  )
}

export default App
