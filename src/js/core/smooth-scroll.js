/**
 * smooth-scroll.js — Lenis integrado com GSAP ticker
 * Cria scroll suave com inércia física e sincroniza com ScrollTrigger
 */

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis

export function initSmoothScroll() {
  // Prefers-reduced-motion: não inicializa Lenis
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ScrollTrigger.refresh()
    return null
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  })

  // Sincroniza Lenis com GSAP ticker (essencial para ScrollTrigger)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  // Links âncora com scroll suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
    })
  })

  return lenis
}

export function getLenis() {
  return lenis
}
