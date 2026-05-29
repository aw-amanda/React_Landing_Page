import AboutGridImg1 from "../../assets/AboutGridImg1.png"
import AboutGridImg2 from "../../assets/AboutGridImg2.png"
import AboutGridImg3 from "../../assets/AboutGridImg3.png"
import AboutGridImg4 from "../../assets/AboutGridImg4.png"
import AboutGridImg5 from "../../assets/AboutGridImg5.png"
import AboutGridImg6 from "../../assets/AboutGridImg6.png"

interface AboutGridItem {
    src: string
    alt: string
    className: string
}

export const AboutGridItems: AboutGridItem[] = [
    {
        src: AboutGridImg1,
        alt: "Professional landscape design featuring native plants and stone pathway in City residential garden - before and after landscaping transformation",
        className: "col-span-2 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg2,
        alt: "Beautiful backyard patio and hardscape installation with fire pit and seating area - custom landscape design by Landscaping Services",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg3,
        alt: "Lush green lawn maintenance and tree care service - professional landscaping team at work in City residential property",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg4,
        alt: "Commercial property landscaping with seasonal flowers and drought-tolerant plants - corporate campus grounds maintenance",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg5,
        alt: "Irrigation system installation and water-efficient landscape design for sustainable garden maintenance",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg6,
        alt: "Complete property transformation with new sod installation, shrubbery, and decorative mulch - residential landscaping project showcase",
        className: "col-span-2 rounded-xl w-full object-cover md:h-60 h-50",
    },
]