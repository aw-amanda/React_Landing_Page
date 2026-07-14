import { ServiceItems } from "../utils/service-data"
import { Button } from "../ui/button"
import { ListItemFormat } from "../ui/list-format" 
import { useLenis } from "lenis/react"

export const Services = () => {
  const lenis = useLenis()

  return (
    <section 
      id="services"
      className="bg-primary section-padding"
      aria-label="Services section"
    >
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-2">Landscaping Services in City, State</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
          {ServiceItems.map((service, index) => (
            <div key={`service-${index}`} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              
              <h3 className="heading-3 text-center mb-6 md:mb-8">
                {service.title}
              </h3>

              <p className="body-text leading-relaxed mb-8 md:mb-10">
                {service.text}
              </p>
              
              <div className="space-y-1">
                {service.items.map((item, itemIndex) => (
                  <div 
                    key={`service-${index}-item-${itemIndex}`}
                  >
                    <ListItemFormat text={item} />
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="text-center mt-10 md:mt-12">
                <Button 
                  onClick={() => {
                    if (lenis) {
                      lenis.scrollTo("#contact", {
                        duration: 1.5,
                        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                      })
                    }
                  }}
                  variant="secondary"
                  className="px-8 py-3"
                  aria-label={`Request a free quote for ${service.title}`}
                >
                  Request a Free Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}