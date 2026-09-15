import { SEO } from "./components/seo/SEO"
import { Layout } from "./components/layout"
import { Hero } from "./components/sections/hero"
import { About } from "./components/sections/about"
import { Services } from "./components/sections/services"
import { Contact } from "./components/sections/contact"
import { ThemeScript } from "./components/ui/theme-script"
import { ReactLenis } from "lenis/react"
import { lenisOptions } from "./lib/utils/scroll"

function App() {
  return (
    <>
      <ThemeScript />
      <SEO />
      <ReactLenis root options={lenisOptions}>
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