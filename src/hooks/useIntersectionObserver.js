import { useEffect, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}

export function useStatCounter(ref) {
  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target
          const text = element.textContent

          if (!isNaN(parseInt(text))) {
            const endValue = parseInt(text)
            let startValue = 0
            const duration = 2000
            const increment = endValue / (duration / 16)

            const animate = () => {
              startValue += increment
              if (startValue < endValue) {
                element.textContent = Math.floor(startValue) + (text.includes('%') ? '%' : '+')
                requestAnimationFrame(animate)
              } else {
                element.textContent = text
              }
            }
            animate()
          }
          observer.unobserve(element)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
}
