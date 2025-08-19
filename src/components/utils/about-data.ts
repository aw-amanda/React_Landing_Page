interface AboutItem {
    title: string
    text: string
    items: string[]
    cta: string
}

export const AboutItems: AboutItem[] = [
    {
        title: "Why Landscaping Services is City's Preferred Residential Landscaper",
        text: "At Landscaping Services, we bring over 20 years of residential landscaping excellence to City homeowners. Our family-owned company takes pride in transforming ordinary yards into stunning outdoor retreats. When you hire professional landscapers like our team, you'll enjoy:",
        items: [
                "Increased property value: Well-designed landscapes can boost home values by up to 15%",
                "Time savings: Free up your weekends while we handle all yard maintenance",
                "Expert knowledge: We select plants and materials perfectly suited to City's climate",
                "Year-round beauty: Our seasonal programs ensure your property looks its best in every season",
                "Stress-free maintenance: No more equipment purchases or storage hassles",
        ],
        cta: "What sets us apart is our genuine care for each client's outdoor space. We treat your yard like it's our own, so reach out anytime to discuss your options."
    },
    {
        title: "The Landscaping Services Difference for City Businesses",
        text: "Serving City's business community since Year, Landscaping Services understands how exceptional landscaping impacts your bottom line. Our commercial clients choose professional landscaping because it delivers:",
        items: [
            "Enhanced first impressions: 90% of customers form opinions about businesses based on landscaping",
            "Reduced liability: Proper maintenance prevents trip hazards and other safety concerns",
            "Cost predictability: Fixed-service contracts eliminate surprise expenses",
            "Increased foot traffic: Attractive landscapes draw 30% more visitors to retail locations",
            "24/7 peace of mind: Our emergency response team handles weather-related issues immediately",
        ],
        cta: "We go beyond basic maintenance to create landscapes that reflect your business's professionalism and brand values. Call us today at (555) 555-5555 for a free quote."
    }
]