/**
 * header.js — Comportamento do header fixo
 * Adiciona backdrop blur após scroll + menu mobile
 */

import { gsap } from 'gsap'
import { getLenis } from '../core/smooth-scroll.js'

export function initHeader() {
  const header = document.querySelector('.header')
  if (!header) return

  // ---- Scroll: hide/show com threshold para evitar tics do Lenis ----
  let lastScroll = 0

  function onScroll({ scroll }) {
    const current = scroll
    const delta = current - lastScroll

    // Ignora micro-movimentos (<4px) — elimina oscilações do easing Lenis
    if (Math.abs(delta) < 4) return

    if (current > 80) {
      header.classList.add('header--scrolled')
    } else {
      header.classList.remove('header--scrolled')
    }

    if (delta > 0 && current > 300) {
      header.classList.add('header--hidden')
    } else if (delta < 0) {
      header.classList.remove('header--hidden')
    }

    lastScroll = current
  }

  // Usa o evento nativo do Lenis (sincronizado com GSAP ticker, sem duplo disparo)
  const lenis = getLenis()
  if (lenis) {
    lenis.on('scroll', onScroll)
  } else {
    window.addEventListener(
      'scroll',
      () => onScroll({ scroll: window.scrollY }),
      { passive: true }
    )
  }

  // ---- Menu mobile ----
  const menuBtn = document.querySelector('.header__menu-btn')
  const nav = document.querySelector('.header__nav')
  const menuIcon = document.querySelector('.header__menu-icon')

  if (!menuBtn || !nav) return

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open')

    if (!isOpen) {
      nav.classList.add('is-open')
      menuBtn.setAttribute('aria-expanded', 'true')
      gsap.fromTo(
        nav,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' }
      )
      if (menuIcon) menuIcon.textContent = '✕'
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(nav, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: 'expo.in',
        onComplete: () => {
          nav.classList.remove('is-open')
          menuBtn.setAttribute('aria-expanded', 'false')
          document.body.style.overflow = ''
        },
      })
      if (menuIcon) menuIcon.textContent = '☰'
    }
  })

  // Fecha ao clicar em link
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      menuBtn.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
      if (menuIcon) menuIcon.textContent = '☰'
    })
  })
}
