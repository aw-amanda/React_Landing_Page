// Img lazy load
export const lazyLoadImages = () => {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll('img:not([loading])')
    images.forEach(img => {
      img.setAttribute('loading', 'lazy')
    })
    
    const allImages = document.querySelectorAll('img')
    allImages.forEach(img => {
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async')
      }
    })
  }
}

// Img preload
export const preloadCriticalImages = (imageUrls: string[]) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    imageUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }
}

// Initialize analytics
export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Google Analytics 4
    // const script = document.createElement('script')
    // script.async = true
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    // document.head.appendChild(script)
    
    // window.dataLayer = window.dataLayer || []
    // function gtag(){dataLayer.push(arguments)}
    // gtag('js', new Date())
    // gtag('config', 'G-XXXXXXXXXX')
    
    console.log('Analytics initialized')
  }
}

// Performance marking for Core Web Vitals
export const markPerformance = (markName: string) => {
  if (typeof window !== 'undefined' && 'performance' in window && 'mark' in performance) {
    performance.mark(markName)
  }
}

// Measure page load performance
export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationTiming) {
      console.log('Page load time:', navigationTiming.loadEventEnd - navigationTiming.fetchStart, 'ms')
      console.log('DOM Interactive:', navigationTiming.domInteractive - navigationTiming.fetchStart, 'ms')
    }
  }
}

// LCP monitoring
export const monitorLCP = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        console.log('LCP:', lastEntry.startTime, 'ms')
      })
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (e) {
      console.log('LCP monitoring not supported')
    }
  }
}