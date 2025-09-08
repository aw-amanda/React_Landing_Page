import { useState } from "react"
import image1 from "../../assets/hero-image-1.png"
import image2 from "../../assets/hero-image-2.png"
import image3 from "../../assets/hero-image-3.png"
import image4 from "../../assets/hero-image-4.png"
import image5 from "../../assets/hero-image-5.png"

type SliderImage = {
  src: string
  alt: string
};

const SLIDER_IMAGES: SliderImage[] = [
  { src: image1, alt: "landscape image 1" },
  { src: image2, alt: "landscape image 2" },
  { src: image3, alt: "landscape image 3" },
  { src: image4, alt: "landscape image 4" },
  { src: image5, alt: "landscape image 5" },
]

const ANIMATION_DURATION = 35

const animationStyles = `
  @keyframes fadeSlide {
    0% { opacity: 0; }
    5% { opacity: 1; }
    20% { opacity: 1; }
    25% { opacity: 0; }
    100% { opacity: 0; }
  }
  .animate-fade-slide {
    animation: fadeSlide ${ANIMATION_DURATION}s infinite;
  }
  .animation-paused {
    animation-play-state: paused;
  }
`

export default function Slider() {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    setIsPlaying(prev => !prev)
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <div className="relative w-full h-full">
        {SLIDER_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover opacity-0 ${
              isPlaying ? "animate-fade-slide" : "animation-paused"
            }`}
            style={{ animationDelay: `${index * 7}s` }}
          />
        ))}
        
        <button
          onClick={togglePlay}
          title="Pause/Play Slideshow"
          className="absolute bottom-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}