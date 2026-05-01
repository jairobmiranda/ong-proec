/**
 * main.js — Entry point do site
 * Inicializa todos os módulos na ordem correta
 */

import '../css/main.css'

import { initSmoothScroll } from './core/smooth-scroll.js'
import { initCursor } from './core/cursor.js'
import { initPageTransitions } from './core/page-transitions.js'
import { initScrollReveals } from './core/scroll-reveals.js'
import { initHeroAnimations } from './animations/hero.js'
import { initCounters } from './animations/counters.js'
import { initHeader } from './animations/header.js'

// Aguarda DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll suave (Lenis + GSAP ticker)
  initSmoothScroll()

  // 2. Cursor customizado
  initCursor()

  // 3. Page transitions
  initPageTransitions()

  // 4. Scroll reveals (todos os [data-reveal] e [data-reveal-group])
  initScrollReveals()

  // 5. Animações específicas de seções
  initHeroAnimations()
  initCounters()
  initHeader()
})
