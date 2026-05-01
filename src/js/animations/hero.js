/**
 * hero.js — Animações da seção Hero
 * SplitText nos títulos + parallax + blob morph
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const hero = document.querySelector('.hero')
  if (!hero) return

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

  // Badge de entrada
  const badge = hero.querySelector('.hero__badge')
  if (badge) {
    tl.fromTo(badge,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      0
    )
  }

  // Título — animação por linha (SplitText manual com spans)
  const titleLines = hero.querySelectorAll('.hero__title-line')
  if (titleLines.length) {
    tl.fromTo(titleLines,
      { opacity: 0, y: 60, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 },
      0.2
    )
  }

  // Lead text
  const lead = hero.querySelector('.hero__lead')
  if (lead) {
    tl.fromTo(lead,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.6
    )
  }

  // Botões CTA
  const ctas = hero.querySelectorAll('.hero__cta')
  if (ctas.length) {
    tl.fromTo(ctas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      0.8
    )
  }

  // Métricas / badges de números
  const metrics = hero.querySelectorAll('.hero__metric')
  if (metrics.length) {
    tl.fromTo(metrics,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.12 },
      0.9
    )
  }

  // Scroll indicator
  const scrollIndicator = hero.querySelector('.hero__scroll')
  if (scrollIndicator) {
    tl.fromTo(scrollIndicator,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6 },
      1.2
    )
  }

  // Parallax no blob decorativo ao scroll
  const blob = hero.querySelector('.hero__blob')
  if (blob) {
    gsap.to(blob, {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })
  }

  // Parallax sutil no conteúdo do hero
  const heroContent = hero.querySelector('.hero__content')
  if (heroContent) {
    gsap.to(heroContent, {
      y: 80,
      opacity: 0.6,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '60% top',
        scrub: 1,
      },
    })
  }
}
