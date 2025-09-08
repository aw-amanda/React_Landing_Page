import { Layout } from "./components/layout"
import { Hero } from "./components/sections/hero"
import { About } from "./components/sections/about"
import { Services } from "./components/sections/services"
import { Contact } from "./components/sections/contact"
import { ReactLenis } from 'lenis/react'

function App() {

  return (
    <ReactLenis root>
      <Layout title="Landscaping Services Landing Page">
        <Hero />
        <About />
        <Services />
        <Contact />
      </Layout>
    </ReactLenis>
  )
}

export default App