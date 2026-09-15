import { AboutItems } from "../../lib/data/about-data"
import { ListItemFormat } from "../ui/list-format"
import { AboutGridItems } from "../../lib/data/about-grid-data"

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-secondary section-padding cv-auto"
    >
      <div className="container-responsive">
        <header className="text-center mb-10 md:mb-14 lg:mb-18">
          <h2 id="about-heading" className="heading-2">
            About Landscaping Services
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mt-4 rounded-full" aria-hidden="true" />
        </header>

        <div className="max-w-3xl mx-auto space-y-14 md:space-y-18 lg:space-y-22">
          {AboutItems.map((item, index) => (
            <article key={`about-${index}`} className="flex flex-col">
              <h3 className="heading-3 text-center mb-5 md:mb-7">{item.title}</h3>

              <p className="body-text leading-relaxed mb-6 md:mb-8">{item.text}</p>

              <ul className="space-y-3" role="list">
                {item.items.map((listItem, itemIndex) => (
                  <li key={`about-${index}-item-${itemIndex}`}>
                    <ListItemFormat text={listItem} />
                  </li>
                ))}
              </ul>

              <aside className="mt-8 md:mt-10 bg-[var(--color-accent-soft)] border-l-4 border-[var(--color-accent)] p-4 md:p-5 rounded-r-xl">
                <p className="body-text italic">"{item.cta}"</p>
              </aside>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-18 lg:mt-22">
          <h3 className="heading-3 text-center mb-6 md:mb-10">Our Recent Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
            {AboutGridItems.map((item, index) => {
              const spanLg = item.className?.includes("col-span-2") && index % 2 === 0
              return (
                <figure
                  key={`about-img-${index}`}
                  className={[
                    "overflow-hidden rounded-xl shadow-elegant",
                    spanLg ? "lg:col-span-2" : "",
                  ].join(" ")}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                </figure>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}