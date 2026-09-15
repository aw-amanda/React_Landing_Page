import { Button } from "../ui/button"
import Slider from "../ui/slider"
import { useLenis } from "lenis/react"
import { anchorScrollOptions } from "../../lib/utils/scroll"

export const Hero = () => {
  const lenis = useLenis()

  const goToContact = () => {
    lenis?.scrollTo("#contact", anchorScrollOptions)
  }

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <Slider />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 sm:px-8 text-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-6 bg-trans backdrop-blur-sm rounded-3xl shadow-2xl px-4">
          <h1 className="heading-1 !text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] px-4 py-2 sm:py-3 rounded-2xl">
            The City's Best Landscaping Services
          </h1>

          <p className="body-text-large !text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] max-w-2xl mx-auto">
            Proudly serving residential and commercial property owners in the County area
          </p>

          <div className="w-full max-w-sm sm:max-w-md mt-2 sm:mt-4 pb-6">
            <Button
              onClick={goToContact}
              className="w-full"
              aria-label="Navigate to the contact form for a free consultation"
            >
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}