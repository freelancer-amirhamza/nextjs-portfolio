
import About from '@/components/About'
import StarsCanvas from '@/components/canvas/StarsCanvas'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

import Testimonials from '@/components/Testimonials'

const App = () => {
  return (
    <div className="relative mt-20 z-0 w-full min-h-screen bg-primary">
      <div className="relative bg-cover bg-no-repeat bg-center">
        <Hero/>
        <StarsCanvas/>
      </div>
      <About/>
      <Experience/>
      {/* <Tech/> */}
      <Projects/>
      <Testimonials/>
      <div className="relative z-2">
        <Contact/>
        <StarsCanvas/>
      </div>
      <div className="hidden sm:block">
        <StarsCanvas  />
      </div>
    </div>

  )
}

export default App

// some addition needs
// About page
// contact page
// project page