/**
 * page-transitions.js — Transições suaves entre páginas
 * Overlay de clip-path animado via GSAP ao navegar
 */

import { gsap } from 'gsap'
import { getLenis } from './smooth-scroll.js'

const overlay = document.querySelector('.page-transition')

export function initPageTransitions() {
  if (!overlay) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Entrada na página — overlay sai de baixo para cima
  gsap.fromTo(
    overlay,
    { scaleY: 1, transformOrigin: 'top' },
    {
      scaleY: 0,
      duration: 0.8,
      ease: 'expo.inOut',
      delay: 0.1,
    }
  )

  // Intercepta cliques em links internos
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]')
    if (!link) return

    const href = link.getAttribute('href')
    const isInternal =
      href &&
      !href.startsWith('http') &&
      !href.startsWith('mailto') &&
      !href.startsWith('tel') &&
      !href.startsWith('#') &&
      !link.hasAttribute('target')

    if (!isInternal) return

    e.preventDefault()

    const lenis = getLenis()
    if (lenis) lenis.stop()

    gsap.fromTo(
      overlay,
      { scaleY: 0, transformOrigin: 'bottom' },
      {
        scaleY: 1,
        duration: 0.6,
        ease: 'expo.inOut',
        onComplete: () => {
          window.location.href = href
        },
      }
    )
  })
}
