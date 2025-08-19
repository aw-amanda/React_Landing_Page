import ResidentialLandscapingImage from "../../assets/ResidentialLandscapingImage.png"
import CommercialLandscapingImage from "../../assets/CommercialLandscapingImage.png"

interface ServiceItemProps {
  title: string
  items: string[]
  image: string
}

export const ServiceItems: ServiceItemProps[] = [
  { title: "Residential Services", 
    items: [
      "Custom landscape design: tailored landscape designs matching your vision and property's unique characteristics",
      "Scheduled maintenance programs: weekly mowing, trimming, and fertilization",
      "Hardscape installation: patios, walkways, and retaining walls built to last",
      "Irrigation systems: water-efficient solutions to keep your landscape thriving",
      "Tree and shrub care: professional pruning, planting, and health assessments",
      "Seasonal or annual cleanup services: construction or storm debris and snow removal",
    ],
    image: ResidentialLandscapingImage
  },
  {
    title: "Commercial Services",
    items: [
      "Corporate campus landscaping: impressive first impressions for clients and employees",
      "Property beautification: high-visibility landscaping that attracts customers",
      "Snow removal services: reliable winter maintenance for parking lots and walkways",
      "Seasonal color rotations: year-round vibrant displays with our floral programs",
      "ADA-compliant designs: landscapes meeting all accessibility requirements",
      "Commercial property maintenance: regular mowing, trimming, weeding, and repairing outdoor property grounds",
    ],
    image: CommercialLandscapingImage
  }
]