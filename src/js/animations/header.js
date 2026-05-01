/**
 * header.js — Comportamento do header fixo
 * Adiciona backdrop blur após scroll + menu mobile
 */

import { gsap } from 'gsap'

export function initHeader() {
  const header = document.querySelector('.header')
  if (!header) return

  // Scroll listener — blur e shadow aparecem
  let lastScroll = 0
  window.addEventListener('scroll', () => {
    const current = window.scrollY
    if (current > 80) {
      header.classList.add('header--scrolled')
    } else {
      header.classList.remove('header--scrolled')
    }
    // Esconde header ao scrollar para baixo, mostra ao subir
    if (current > lastScroll && current > 300) {
      header.classList.add('header--hidden')
    } else {
      header.classList.remove('header--hidden')
    }
    lastScroll = current
  }, { passive: true })

  // Menu mobile
  const menuBtn = document.querySelector('.header__menu-btn')
  const nav = document.querySelector('.header__nav')
  const menuIcon = document.querySelector('.header__menu-icon')

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.contains('is-open')

      if (!isOpen) {
        nav.classList.add('is-open')
        menuBtn.setAttribute('aria-expanded', 'true')
        gsap.fromTo(nav,
          { opacity: 0, y: -20 },
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
}
