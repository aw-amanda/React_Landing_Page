export const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-secondary border-t border-border mt-auto">
            <div className="container-responsive section-padding !pb-8 !pt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="heading-3 text-base sm:text-lg mb-4">Landscaping Services</h3>
                        <p className="body-text-small">
                            Professional landscaping services for residential and commercial properties in City and surrounding areas.
                        </p>
                        <div className="mt-4">
                            <p className="body-text-small">
                                <strong>License #:</strong> LLC-12345
                            </p>
                            <p className="body-text-small">
                                <strong>Insured & Bonded</strong>
                            </p>
                        </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="heading-3 text-base sm:text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+15555555555" className="body-text-small hover:text-accent transition-colors">
                                    📞 (555) 555-5555
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@landscapingservices.com" className="body-text-small hover:text-accent transition-colors break-words">
                                    ✉️ info@landscapingservices.com
                                </a>
                            </li>
                            <li className="body-text-small">
                                📍 123 Main Street<br />
                                City, State 12345
                            </li>
                        </ul>
                    </div>
                    
                    {/* Business Hours */}
                    <div>
                        <h3 className="heading-3 text-base sm:text-lg mb-4">Business Hours</h3>
                        <ul className="space-y-1">
                            <li className="body-text-small">
                                <span className="font-semibold">Monday - Friday:</span> 7:00 AM - 6:00 PM
                            </li>
                            <li className="body-text-small">
                                <span className="font-semibold">Saturday:</span> 8:00 AM - 4:00 PM
                            </li>
                            <li className="body-text-small">
                                <span className="font-semibold">Sunday:</span> Closed
                            </li>
                            <li className="body-text-small mt-2">
                                <span className="font-semibold">24/7 Emergency:</span> Available
                            </li>
                        </ul>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="heading-3 text-base sm:text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="body-text-small hover:text-accent transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="body-text-small hover:text-accent transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="body-text-small hover:text-accent transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="body-text-small hover:text-accent transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="body-text-small hover:text-accent transition-colors">
                                    Free Consultation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Services List */}
                <div className="border-t border-border pt-6 mb-6">
                    <h3 className="heading-3 text-sm sm:text-base mb-3 text-center">Our Services</h3>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <span className="body-text-small">Lawn Maintenance</span>
                        <span className="body-text-small">Landscape Design</span>
                        <span className="body-text-small">Hardscape Installation</span>
                        <span className="body-text-small">Irrigation Systems</span>
                        <span className="body-text-small">Tree & Shrub Care</span>
                        <span className="body-text-small">Snow Removal</span>
                        <span className="body-text-small">Seasonal Cleanup</span>
                        <span className="body-text-small">Commercial Grounds Care</span>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-border pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="body-text-small">
                            © {currentYear} Landscaping Services. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="body-text-small hover:text-accent transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="body-text-small hover:text-accent transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="body-text-small hover:text-accent transition-colors">
                                Accessibility
                            </a>
                        </div>
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.205-.012 3.585-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}