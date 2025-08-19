import { Button } from "./utils/button"
import Slider from "./utils/slider"
import { useLenis } from "lenis/react"

export const Hero = () => {
    const lenis = useLenis()

    return (
        <section 
            id="home" 
            className="relative w-full items-center justify-center bg-style"
        >
            <div className="relative w-full h-screen">
                <Slider />
                <div className="absolute inset-0 flex flex-col max-w-full mx-auto px-4 z-10
                                items-center justify-center text-center"
                >
                    <div className="mb-16 bg-gray-50/25 backdrop-blur-xs rounded-3xl shadow-2xl">
                        <h1 className="h1-style">The City's Best Landscaping Services</h1>
                        <h3 className="h3-style p-4">Proudly serving residential and commercial property owners in the County area</h3>
                    </div>
                
                    <div className="w-3/4 px-4 absolute bottom-20">
                        <Button 
                            onClick={() => {
                                if (lenis) {
                                    lenis.scrollTo("#contact", {
                                        duration: 1.5,
                                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                                    })
                                }
                            }}
                            className="w-full py-4 px-2"
                            aria-label="Navigate to the contact form for a free consultation"
                        >
                            Request a free consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}