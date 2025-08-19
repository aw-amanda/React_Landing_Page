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
        alt: "Image of landscape project 1",
        className: "col-span-2 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg2,
        alt: "Image of landscape project 2",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg3,
        alt: "Image of landscape project 3",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg4,
        alt: "Image of landscape project 4",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg5,
        alt: "Image of landscape project 5",
        className: "col-span-1 rounded-xl w-full object-cover md:h-60 h-50",
    },
    {
        src: AboutGridImg6,
        alt: "Image of landscape project 6",
        className: "col-span-2 rounded-xl w-full object-cover md:h-60 h-50",
    },
]