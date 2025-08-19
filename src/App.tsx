import { Layout } from "./components/layout"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Services } from "./components/services"
import { Contact } from "./components/contact"
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