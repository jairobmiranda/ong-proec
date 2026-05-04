/**
 * main.js — Entry point do site
 * Carrega partials e inicializa todos os módulos na ordem correta
 */

import '../css/main.css'

import { initSmoothScroll } from './core/smooth-scroll.js'
import { initCursor } from './core/cursor.js'
import { initPageTransitions } from './core/page-transitions.js'
import { initScrollReveals } from './core/scroll-reveals.js'
import { initHeroAnimations } from './animations/hero.js'
import { initCounters } from './animations/counters.js'
import { initHeader } from './animations/header.js'
import { initEventsSection } from './events/events-section.js'

async function loadPartial(id, path) {
  try {
    const res = await fetch(path)
    if (res.ok) document.getElementById(id).innerHTML = await res.text()
  } catch (e) {
    console.warn('Partial não carregado:', path)
  }
}

// Aguarda DOM estar pronto
document.addEventListener('DOMContentLoaded', async () => {
  // 0. Carrega partials antes de qualquer inicialização
  //    Header e footer precisam existir no DOM antes de vincular eventos
  await Promise.all([
    loadPartial('header-placeholder', '/partials/header.html'),
    loadPartial('footer-placeholder', '/partials/footer.html'),
  ])

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
  initEventsSection()
})
