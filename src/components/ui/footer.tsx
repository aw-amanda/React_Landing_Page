export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container-responsive pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="heading-3 !text-base sm:!text-lg mb-4">Landscaping Services</h3>
            <p className="body-text-small">
              Professional landscaping services for residential and commercial properties in City and surrounding areas.
            </p>
            <div className="mt-4 space-y-1">
              <p className="body-text-small">
                <strong className="text-primary">License #:</strong> LLC-12345
              </p>
              <p className="body-text-small">
                <strong className="text-primary">Insured &amp; Bonded</strong>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="heading-3 !text-base sm:!text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href="tel:+15555555555"
                  className="body-text-small hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <PhoneIcon />
                  (555) 555-5555
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@landscapingservices.com"
                  className="body-text-small hover:text-accent transition-colors inline-flex items-center gap-2 break-all"
                >
                  <MailIcon />
                  info@landscapingservices.com
                </a>
              </li>
              <li className="body-text-small inline-flex items-start gap-2">
                <PinIcon />
                <span>
                  123 Main Street
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="heading-3 !text-base sm:!text-lg mb-4">Business Hours</h3>
            <ul className="space-y-1" role="list">
              <li className="body-text-small">
                <span className="font-semibold text-primary">Monday - Friday:</span> 7:00 AM - 6:00 PM
              </li>
              <li className="body-text-small">
                <span className="font-semibold text-primary">Saturday:</span> 8:00 AM - 4:00 PM
              </li>
              <li className="body-text-small">
                <span className="font-semibold text-primary">Sunday:</span> Closed
              </li>
              <li className="body-text-small mt-2">
                <span className="font-semibold text-primary">24/7 Emergency:</span> Available
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-3 !text-base sm:!text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About Us" },
                { href: "#services", text: "Services" },
                { href: "#contact", text: "Contact" },
                { href: "#contact", text: "Free Consultation" },
              ].map((l) => (
                <li key={l.text}>
                  <a href={l.href} className="body-text-small hover:text-accent transition-colors">
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-border pt-6 mb-6">
          <h3 className="heading-3 !text-sm sm:!text-base mb-3 text-center">Our Services</h3>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
            {[
              "Lawn Maintenance",
              "Landscape Design",
              "Hardscape Installation",
              "Irrigation Systems",
              "Tree & Shrub Care",
              "Snow Removal",
              "Seasonal Cleanup",
              "Commercial Grounds Care",
            ].map((s) => (
              <li key={s} className="body-text-small">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="body-text-small">
              © {currentYear} Landscaping Services. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6" role="list">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map((l) => (
                <li key={l}>
                  <a href="#" className="body-text-small hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-3 mt-5">
            {[
              { label: "Facebook", href: "#", Icon: FacebookIcon },
              { label: "Twitter", href: "#", Icon: TwitterIcon },
              { label: "Instagram", href: "#", Icon: InstagramIcon },
              { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-full text-secondary hover:text-accent hover:bg-[var(--color-accent-soft)] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const iconProps = {
  className: "w-4 h-4 shrink-0",
  "aria-hidden": true as const,
  focusable: false as const,
}

const PhoneIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const MailIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 6 8 6 8-6" />
  </svg>
)
const PinIcon = () => (
  <svg {...iconProps} className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
  </svg>
)
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
  </svg>
)
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.205-.012 3.585-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
  </svg>
)