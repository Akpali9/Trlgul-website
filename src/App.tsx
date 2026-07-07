import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#04080f', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
