import { useEffect, useRef, useState } from "react"
import image1 from "../../assets/hero-image-1.png"
import image2 from "../../assets/hero-image-2.png"
import image3 from "../../assets/hero-image-3.png"
import image4 from "../../assets/hero-image-4.png"
import image5 from "../../assets/hero-image-5.png"

type SliderImage = {
  src: string
  alt: string
}

const SLIDER_IMAGES: SliderImage[] = [
  { src: image1, alt: "Freshly manicured lawn with layered shrubs and stone edging" },
  { src: image2, alt: "Backyard patio with natural stone pavers and surrounding greenery" },
  { src: image3, alt: "Flowering garden beds bordering a trimmed lawn" },
  { src: image4, alt: "Evergreen shrubs and seasonal plantings along a walkway" },
  { src: image5, alt: "Lush landscaped yard with mature trees and clean lawn lines" },
]

const ANIMATION_DURATION = 35 
const STAGGER = 7 

export default function Slider() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)
  const pausedAtRef = useRef<number>(0)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reducedMotion || !isPlaying) return

    const loop = (now: number) => {
      if (startRef.current === 0) startRef.current = now - pausedAtRef.current
      const elapsed = (now - startRef.current) / 1000
      const cycle = elapsed % ANIMATION_DURATION
      let idx = 0
      for (let i = SLIDER_IMAGES.length - 1; i >= 0; i--) {
        if (cycle >= i * STAGGER) { idx = i; break }
      }
      setActiveIndex((prev) => (prev === idx ? prev : idx))
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (startRef.current !== 0) {
        pausedAtRef.current = performance.now() - startRef.current
      }
    }
  }, [isPlaying, reducedMotion])

  const togglePlay = () => {
    setIsPlaying((p) => !p)
    if (isPlaying) {
      pausedAtRef.current = performance.now() - (startRef.current || performance.now())
    } else {
      startRef.current = performance.now() - pausedAtRef.current
    }
  }

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={SLIDER_IMAGES[0].src}
          alt={SLIDER_IMAGES[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {SLIDER_IMAGES.map((image, index) => {
        const isActive = index === activeIndex
        return (
          <img
            key={index}
            src={image.src}
            alt=""
            aria-hidden={!isActive}
            className={[
              "absolute inset-0 w-full h-full object-cover",
              isPlaying ? "slider-img" : "slider-img slider-img-paused",
              !isPlaying && isActive ? "slider-img-paused-active" : "",
            ].join(" ")}
            style={{
              animationDelay: `${index * STAGGER}s`,
              animationDuration: `${ANIMATION_DURATION}s`,
              opacity: isActive ? 1 : 0,
              transition: isPlaying ? "none" : "opacity 200ms linear",
            }}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            width={1920}
            height={1080}
          />
        )
      })}

      <style>{`
        .slider-img {
          animation-name: sliderFade;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-fill-mode: both;
        }
        @keyframes sliderFade {
          0%   { opacity: 0; }
          5%   { opacity: 1; }
          20%  { opacity: 1; }
          25%  { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        aria-pressed={!isPlaying}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/55 hover:bg-black/75 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  )
}