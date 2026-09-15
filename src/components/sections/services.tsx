import { ServiceItems } from "../../lib/data/service-data"
import { Button } from "../ui/button"
import { ListItemFormat } from "../ui/list-format"
import { useLenis } from "lenis/react"
import { anchorScrollOptions } from "../../lib/utils/scroll"

export const Services = () => {
  const lenis = useLenis()

  const goToContact = () => {
    lenis?.scrollTo("#contact", anchorScrollOptions)
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-primary section-padding cv-auto"
    >
      <div className="container-responsive">
        <header className="text-center mb-10 md:mb-14 lg:mb-18">
          <h2 id="services-heading" className="heading-2">
            Landscaping Services in City, State
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mt-4 rounded-full" aria-hidden="true" />
        </header>

        <div className="max-w-3xl mx-auto space-y-14 md:space-y-18 lg:space-y-22">
          {ServiceItems.map((service, index) => (
            <article key={`service-${index}`} className="flex flex-col">
              <figure className="mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={service.image}
                  alt={`${service.title} — example project`}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={800}
                />
              </figure>

              <h3 className="heading-3 text-center mb-5 md:mb-7">{service.title}</h3>

              <p className="body-text leading-relaxed mb-6 md:mb-8">{service.text}</p>

              <ul className="space-y-3" role="list">
                {service.items.map((item, itemIndex) => (
                  <li key={`service-${index}-item-${itemIndex}`}>
                    <ListItemFormat text={item} />
                  </li>
                ))}
              </ul>

              <div className="text-center mt-10 md:mt-12">
                <Button
                  onClick={goToContact}
                  variant="secondary"
                  aria-label={`Request a free quote for ${service.title}`}
                >
                  Request a Free Quote
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}