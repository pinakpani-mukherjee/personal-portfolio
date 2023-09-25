import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Employment from './components/Employment'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <AboutMe />
        <br></br>
        <Employment />
        <EmailSection />

      </div>
      <Footer />

    </main>
  )
}
