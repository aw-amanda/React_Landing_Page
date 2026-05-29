import { useEffect } from 'react'

interface PageSEOProps {
  title?: string
  description?: string
  noIndex?: boolean
}

export const PageSEO = ({ 
  title, 
  description, 
  noIndex = false 
}: PageSEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
    
    if (noIndex) {
      const robotsMeta = document.querySelector('meta[name="robots"]')
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow')
      }
    }
  }, [title, description, noIndex])

  return null
}