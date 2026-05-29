import { Button } from "../ui/button"
import Slider from "../ui/slider"
import { useLenis } from "lenis/react"

export const Hero = () => {
    const lenis = useLenis()

    return (
        <section 
            id="home" 
            className="relative w-full min-h-screen flex items-center justify-center bg-primary overflow-hidden"
            aria-label="Hero section"
        >
            <div className="relative w-full min-h-screen">
                <Slider />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 z-10 text-center">
                    <h1 className="heading-1 max-w-4xl mx-auto fade-in bg-transparent backdrop-blur-3xl p-2 md:p-4 border-none rounded-2xl shadow-md">
                        The City's Best Landscaping Services
                    </h1>
                    <p className="body-text-large max-w-2xl mx-auto mb-8 fade-in bg-secondary p-1 border-none rounded-2xl">
                        Proudly serving residential and commercial property owners in the County area
                    </p>
                
                    <div className="w-full max-w-md px-4 absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2">
                        <Button 
                            onClick={() => {
                                if (lenis) {
                                    lenis.scrollTo("#contact", {
                                        duration: 1.5,
                                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                                    })
                                }
                            }}
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