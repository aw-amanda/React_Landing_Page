import { type FormEvent, useState } from "react"
import { Button } from "../ui/button"
import ContactBG from "../../assets/ContactBG.png"
import { ContactItems } from "../utils/contact-data"

interface ContactItem {
  label: string
  type: string
  placeholder: string
  name: string
  required: boolean
}

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section 
            id="contact" 
            className="relative bg-secondary section-padding"
            aria-label="Contact section"
        >
            <div 
                className="absolute inset-0 opacity-35"
                style={{
                    backgroundImage: `url(${ContactBG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className="relative container-responsive">
                <div className="max-w-2xl mx-auto">
                    <h2 className="heading-2 text-center mb-8">Contact Landscaping Services</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {ContactItems.map((item: ContactItem, i: number) => (
                            <div key={`item-${i}`}>
                                <label htmlFor={item.name} className="body-text font-semibold mb-2 block">
                                    {item.label}
                                </label>
                                <input 
                                    type={item.type}
                                    id={item.name}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    className="form-input"
                                    required={item.required}
                                    value={formData[item.name as keyof typeof formData] || ''}
                                    onChange={handleChange}
                                /> 
                            </div>   
                        ))}
                        
                        <div>
                            <label htmlFor="message" className="body-text font-semibold mb-2 block">
                                Message
                            </label>
                            <textarea 
                                id="message"
                                name="message" 
                                placeholder="Request a free quote or to learn more about our services"
                                rows={5}
                                className="form-input resize-y"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="text-center">
                            <Button type="submit" className="px-8">
                                Send Message
                            </Button>
                        </div>
                    </form>
                    
                    <div className="mt-8 pt-6 border-t border-border text-center">
                        <p className="body-text">
                            Or call us directly: <a href="tel:+1234567890" className="text-accent hover:text-accent-hover font-semibold">(123) 456-7890</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}