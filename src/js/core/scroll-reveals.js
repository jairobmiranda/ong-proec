/**
 * scroll-reveals.js — Sistema declarativo de animações no scroll
 * Qualquer elemento com [data-reveal] anima ao entrar na viewport
 * Grupos com [data-reveal-group] têm stagger automático nos filhos
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // ---- Elementos individuais [data-reveal] ----
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const direction = el.getAttribute('data-reveal') || 'up'

    const fromVars = { opacity: 0 }
    if (direction === 'up' || direction === '')  fromVars.y = 50
    if (direction === 'down')  fromVars.y = -50
    if (direction === 'left')  fromVars.x = -60
    if (direction === 'right') fromVars.x = 60
    if (direction === 'scale') { fromVars.scale = 0.88; fromVars.y = 20 }

    gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    })
  })

  // ---- Grupos [data-reveal-group] — stagger nos filhos ----
  document.querySelectorAll('[data-reveal-group]').forEach((group) => {
    const children = group.children
    const stagger = parseFloat(group.getAttribute('data-stagger') || '0.1')

    gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger,
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  })

  // ---- Scroll progress bar ----
  const progressBar = document.querySelector('.scroll-progress')
  if (progressBar) {
    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    })
  }
}
