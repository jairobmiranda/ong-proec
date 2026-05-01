/**
 * counters.js — Animação de contadores numéricos
 * Seção Impacto Social com efeito de pinning + count-up
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const section = document.querySelector('.impacto')
  if (!section) return

  const counters = section.querySelectorAll('[data-count]')
  if (!counters.length) return

  // Pinning da seção enquanto os contadores animam
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: false,
      anticipatePin: 1,
      onEnter: () => startCounters(),
    },
  })

  function startCounters() {
    counters.forEach((counter, i) => {
      const target = parseInt(counter.getAttribute('data-count'), 10)
      const suffix = counter.getAttribute('data-suffix') || ''
      const obj = { val: 0 }

      gsap.to(obj, {
        val: target,
        duration: 2,
        delay: i * 0.15,
        ease: 'power2.out',
        onUpdate: () => {
          counter.textContent = Math.round(obj.val).toLocaleString('pt-BR') + suffix
        },
        onComplete: () => {
          counter.textContent = target.toLocaleString('pt-BR') + suffix
        },
      })
    })

    // Anima os labels junto
    const labels = section.querySelectorAll('[data-reveal-group] .impacto__label')
    gsap.fromTo(labels,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'expo.out', delay: 0.3 }
    )
  }
}
