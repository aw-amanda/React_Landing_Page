import ResidentialLandscapingImage from "../../assets/ResidentialLandscapingImage.png"
import CommercialLandscapingImage from "../../assets/CommercialLandscapingImage.png"

interface ServiceItemProps {
  title: string
  text: string
  items: string[]
  image: string
}

export const ServiceItems: ServiceItemProps[] = [
  { 
    title: "Residential Landscaping Services in City and Surrounding Areas", 
    text: "Proudly serving City and the surrounding areas in State, our functional and aesthetic landscaping services are available year-round. Whether your home or rental property needs regular maintenance, a one-time spruce, or a complete makeover, you can get in touch with us anytime. Ask us about:",
    items: [
      "Custom landscape design and installation: Tailored landscape designs matching your vision and property's unique characteristics, including native plant selection and sustainable garden planning",
      "Professional lawn maintenance programs: Comprehensive weekly mowing, trimming, edging, fertilization, and weed control for a pristine yard year-round",
      "Hardscape installation and repair: Expert patios, walkways, retaining walls, and outdoor living spaces built to last with quality materials",
      "Smart irrigation systems: Water-efficient solutions including drip irrigation, smart controllers, and moisture sensors to keep your landscape thriving while reducing water bills",
      "Tree and shrub care services: Professional pruning, planting, health assessments, disease treatment, and removal by certified arborists",
      "Seasonal cleanup and snow removal: Spring and fall cleanup services, storm debris removal, and reliable winter snow plowing for driveways and walkways",
    ],
    image: ResidentialLandscapingImage
  },
  {
    title: "Commercial Landscaping Management and Design",
    text: "Business and commercial property owners can benefit from our full-service maintenance services that are ADA-compliant and highly versatile, to match your needs no matter the season. From snow removal to floral design and everything in between, we are confident that we will provide the best landscaping services for your business. We offer:",
    items: [
      "Corporate campus landscaping: Create impressive first impressions for clients, employees, and visitors with professional grounds management and design",
      "Retail property beautification: High-visibility landscaping that attracts customers and enhances your brand image with seasonal color rotations",
      "Commercial snow removal services: Reliable winter maintenance for parking lots, sidewalks, and entryways with 24/7 monitoring and rapid response",
      "Year-round seasonal color programs: Vibrant floral displays and plant rotations that keep your commercial property looking its best in every season",
      "ADA-compliant landscape design: Professional landscapes meeting all accessibility requirements while maintaining aesthetic appeal and functionality",
      "Full-service commercial maintenance: Regular mowing, trimming, weeding, pruning, fertilization, irrigation management, and comprehensive grounds care",
    ],
    image: CommercialLandscapingImage
  }
]