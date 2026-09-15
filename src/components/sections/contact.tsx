import { type FormEvent, useState } from "react"
import { Button } from "../ui/button"
import ContactBG from "../../assets/ContactBG.png"
import { ContactItems } from "../../lib/data/contact-data"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await new Promise((r) => setTimeout(r, 500))
      setStatus("sent")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-secondary section-padding cv-auto"
    >
        <div
            className="absolute inset-0 opacity-25 dark:opacity-15"
            style={{
            backgroundImage: `url(${ContactBG})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            }}
            aria-hidden="true"
        />

        <div className="relative container-responsive">
            <div className="max-w-xl mx-auto bg-[var(--color-card)]/95 backdrop-blur-sm rounded-2xl shadow-elegant p-6 sm:p-8 md:p-10">
                <h2 id="contact-heading" className="heading-2 text-center mb-8">
                    Contact Landscaping Services
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {ContactItems.map((item, i) => (
                        <div key={`contact-${i}`}>
                            <label htmlFor={item.name} className="body-text font-semibold mb-1.5 block">
                            {item.label}
                            {item.required && (
                                <span aria-hidden="true" className="text-accent ml-1">*</span>
                            )}
                            </label>
                            <input
                            type={item.type}
                            id={item.name}
                            name={item.name}
                            placeholder={item.placeholder}
                            className="form-input"
                            required={item.required}
                            aria-required={item.required}
                            value={formData[item.name as keyof typeof formData] || ""}
                            onChange={handleChange}
                            autoComplete={
                                item.name === "name"
                                ? "name"
                                : item.name === "email"
                                ? "email"
                                : item.name === "phone"
                                ? "tel"
                                : "off"
                            }
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="message" className="body-text font-semibold mb-1.5 block">
                            Message <span aria-hidden="true" className="text-accent">*</span>
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
                            aria-required="true"
                        />
                    </div>

                    <div className="text-center pt-2">
                        <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
                            {status === "submitting" ? "Sending…" : "Send Message"}
                        </Button>
                    </div>

                    <div aria-live="polite" role="status" className="min-h-[1.5rem] text-center">
                        {status === "sent" && (
                            <p className="body-text text-accent">
                                Thank you for your message! We will get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="body-text" style={{ color: "oklch(55% 0.18 25)" }}>
                                Something went wrong. Please call us instead.
                            </p>
                        )}
                    </div>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="body-text">
                        Or call us directly: {" "}
                        <a
                            href="tel:+1234567890"
                            className="text-accent hover:text-[var(--color-accent-hover)] font-semibold underline-offset-4 hover:underline"
                        >
                            (123) 456-7890
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}