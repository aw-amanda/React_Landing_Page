import { AboutItems } from "../utils/about-data"
import { ListItemFormat } from "../ui/list-format"
import { AboutGridItems } from "../utils/about-grid-data"

export const About = () => {
    return(
        <section 
            id="about" 
            className="bg-secondary section-padding"
            aria-label="About section"
        >
            <div className="container-responsive">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className="heading-2">About Landscaping Services</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
                    {AboutItems.map((item, index) => (
                        <div key={`item-${index}`} className="flex flex-col">
                            <h3 className="heading-3 text-center mb-6 md:mb-8">
                                {item.title}
                            </h3>
                            
                            <p className="body-text leading-relaxed mb-8 md:mb-10">
                                {item.text}
                            </p>
                            
                            <div className="space-y-1">
                                {item.items.map((listItem, itemIndex) => (
                                    <div 
                                        key={`service-${index}-item-${itemIndex}`}
                                        className="bg-primary/30 rounded-xl p-2"
                                    >
                                        <ListItemFormat text={listItem} />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 md:mt-10 bg-accent/10 border-l-4 border-accent p-4 md:p-6 rounded-r-xl">
                                <p className="body-text font-medium italic">
                                    "{item.cta}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Gallery */}
                <div className="mt-16 md:mt-20 lg:mt-24">
                    <h3 className="heading-3 text-center mb-8 md:mb-12">Our Recent Projects</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {AboutGridItems.map((item, index) => (
                            <div key={`item-${index}`} className="overflow-hidden rounded-xl shadow-lg">
                                <img 
                                    src={item.src}
                                    alt={item.alt}
                                    className={`w-full h-64 md:h-72 lg:h-80 object-cover ${item.className || ''}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}