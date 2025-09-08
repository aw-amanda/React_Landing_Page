import { Button } from "../ui/button"
import ContactBG from "../../assets/ContactBG.png"
import { ContactItems } from "../utils/contact-data"
import { Container } from "../ui/container"

export const Contact = () => {
    return (
        <section 
            id="contact" 
            className="relative w-full min-h-screen py-20 md:py-32 lg:py-48 bg-style">
            <div 
                className="absolute inset-0 w-screen"
                style={{
                    backgroundImage: `url(${ContactBG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className="relative container mx-auto flex flex-col justify-center items-center w-full min-h-[80vh]">
                <Container className="w-full backdrop-blur-md p-2 md:p-6">
                    <h2 className="h2-style text-center mb-6">Contact Landscaping Services</h2>
                    <div className="flex flex-col gap-1">
                        <form 
                            action="/"
                            className="flex flex-col gap-2 md:gap-1"
                        >
                            {ContactItems.map((item, i) => (
                                <div key={`item-${i}`}>
                                <label className="text-2-style">{item.label}</label>
                                    <input 
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        className="w-full p-2 md:p-3 bg-gray-300/50 outline-none rounded-md focus:ring-1 focus:ring-black"
                                        required={item.required}
                                    /> 
                                </div>   
                            ))}
                            <label className="text-2-style">Message: </label>
                            <textarea 
                                name="message" 
                                placeholder="Request a free quote or to learn more about our services"
                                rows={5} 
                                cols={40} 
                                className="bg-gray-300/50 p-3 outline-none rounded-md focus:ring-1 focus:ring-black"
                            />
                            <Button onClick={() => "#"} className="w-1/2 mx-auto">Submit</Button>
                        </form> 
                    </div>
                </Container>
            </div>
        </section>
    )
}