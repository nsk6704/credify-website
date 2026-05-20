import { useEffect } from 'react'

export function useScrollEffects(navbarRef) {
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (navbarRef?.current) {
        if (currentScroll > 50) {
          navbarRef.current.classList.add('scrolled')
        } else {
          navbarRef.current.classList.remove('scrolled')
        }
      }
      const circles = document.querySelectorAll('.decoration-circle')
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1
        circle.style.transform = `translateY(${currentScroll * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navbarRef])
}
