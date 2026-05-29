import { SEO } from "./components/seo/SEO"
import { Layout } from "./components/layout"
import { Hero } from "./components/sections/hero"
import { About } from "./components/sections/about"
import { Services } from "./components/sections/services"
import { Contact } from "./components/sections/contact"
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <>
      <SEO />
      <ReactLenis root options={{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
        <Layout title="Landscaping Services | Professional Landscape Design & Maintenance">
          <Hero />
          <About />
          <Services />
          <Contact />
        </Layout>
      </ReactLenis>
    </>
  )
}

export default App