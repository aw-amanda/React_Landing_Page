import { AboutItems } from "./utils/about-data"
import { ListItemFormat } from "./utils/list-format"
import { AboutGridItems } from "./utils/about-grid-data"

export const About = () => {
    return(
        <section 
            id="about" 
            className="relative flex flex-col bg-style items-center justify-center w-full py-32 mb-18"
        >
            <div className="py-5 w-full px-4 text-center">
                <h2 className="h2-style">About Landscaping Services</h2>
            </div>
            <div className="max-w-full px-10 mt-10">
                {AboutItems.map((item, index) => (
                <div
                    key={`item-${index}`}
                    className="h-full p-6 md:p-8 flex"
                    title={item.title}
                >
                    <div className="flex flex-col h-full">
                        <div className="text-left box-style my-5">
                            <h3 className="h3-style px-4 py-2">{item.title}</h3>
                        </div>
                        <p className="text-style px-8 my-4">{item.text}</p>
                        <ul className="space-y-2.5 flex-grow my-4 w-full px-15">
                            {item.items.map((item, itemIndex) => (
                                <li
                                    key={`service-${index}-item-${itemIndex}`}
                                    className="flex items-start"
                                >
                                    <span className="text-style"><ListItemFormat text={item} /></span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-style px-8 my-4">{item.cta}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
                    {AboutGridItems.map((item, index) => (
                    <img 
                        key={`item-${index}`}
                        src={item.src}
                        alt={item.alt}
                        className={item.className}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}