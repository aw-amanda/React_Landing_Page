import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
}

export const SEO = ({ 
  title = "Landscaping Services | Professional Landscape Design & Maintenance",
  description = "Professional landscaping services for residential and commercial properties. Free consultations, year-round maintenance, and expert design.",
  keywords = "landscaping, garden design, lawn care, snow removal, tree service, landscaping company",
  image = "https://aw-amanda.github.io/React_Landing_Page/og-image.jpg",
  url = "https://aw-amanda.github.io/React_Landing_Page/",
  type = "website",
  author = "Landscaping Services"
}: SEOProps) => {
  useEffect(() => {
    document.title = title
 
    const updateMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      let selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    if (description) updateMetaTag('description', description, false)
    if (keywords) updateMetaTag('keywords', keywords, false)
    if (author) updateMetaTag('author', author, false)
    updateMetaTag('robots', 'index, follow', false)
    if (title) updateMetaTag('og:title', title, true)
    if (description) updateMetaTag('og:description', description, true)
    if (type) updateMetaTag('og:type', type, true)
    if (url) updateMetaTag('og:url', url, true)
    if (image) updateMetaTag('og:image', image, true)
    updateMetaTag('twitter:card', 'summary_large_image', false)
    if (title) updateMetaTag('twitter:title', title, false)
    if (description) updateMetaTag('twitter:description', description, false)

    if (url) {
      let canonical = document.querySelector("link[rel='canonical']")
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', url)
    }

    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Landscaping Services",
      "image": "https://aw-amanda.github.io/React_Landing_Page/logo.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "City",
        "addressRegion": "State",
        "addressCountry": "US"
      },
      "url": url,
      "telephone": "+1234567890",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00"
    }

    let script = document.querySelector('#schema-markup')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('id', 'schema-markup')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schemaMarkup)

    document.documentElement.setAttribute('lang', 'en')
  }, [title, description, keywords, image, url, type, author])

  return null
}