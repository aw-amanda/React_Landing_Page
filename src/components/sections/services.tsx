import { Container } from "../ui/container"
import { ServiceItems } from "../utils/service-data"
import { Button } from "../ui/button"
import { ListItemFormat } from "../ui/list-format" 
import { useLenis } from "lenis/react"

export const Services = () => {
  const lenis = useLenis()

  return (
    <section 
      id="services"
      className="relative max-w-full flex flex-col items-center justify-center bg-2-style
                px-2 md:px-4 py-6 md:py-18 md:mb-18"
    >
      <div className="p-2 md:py-5 md:px-4 w-full">
        <h2 className="h2-style mb-4 text-center"> Landscaping Services in City, State</h2>
        <p className="text-style text-left px-2 md:px-6 mb-4">
          Proudly serving City and the surrounding areas in State, 
          our functional and aesthetic landscaping services are available year-round. 
          Whether your home or rental properties need a spruce or your business needs reliable 
          snow removal services, our experienced professionals are the best for the job.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        {ServiceItems.map((service, index) => (
          <Container
            key={`service-${index}`}
            className="h-full max-w-5xl min-w-1.5 items-center"
            title={service.title}
          >
            <h3 className="h3-style text-center py-4 md:py-6 px-2 md:px-4">
              {service.title}
            </h3>
            <div className="w-full mb-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-2xl h-80 object-cover rounded-2xl"
              />
            </div>
            <ul className="space-y-3 md:space-y-6 mb-4 md:mb-8 max-w-2xl p-2">
              {service.items.map((item, itemIndex) => (
                <li
                  key={`service-${index}-item-${itemIndex}`}
                  className="flex items-start"
                >
                  <span className="inline-block w-full text-2-style">
                    <ListItemFormat text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="relative text-center my-4 w-full p-2">
              <Button 
                  onClick={() => {
                      if (lenis) {
                          lenis.scrollTo("#contact", {
                              duration: 1.5,
                              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                          })
                      }
                  }}
                  className="max-w-md text-2-style p-4"
                  aria-label="Navigate to the contact form for a free consultation"
              >
                  Request a free quote
              </Button>
            </div>
          </Container>
        ))}
      </div>
    </section>
  )
}