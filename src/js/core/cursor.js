/**
 * cursor.js — Cursor magnético customizado
 * Substitui o cursor padrão por um ponto + seguidor circular
 * Efeito magnético nos elementos [data-magnetic]
 */

export function initCursor() {
  // Apenas em dispositivos com hover (desktop)
  if (!window.matchMedia('(hover: hover)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const dot = document.querySelector('.cursor')
  const follower = document.querySelector('.cursor-follower')

  if (!dot || !follower) return

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let followerX = mouseX
  let followerY = mouseY
  let rafId = null

  const lerp = (a, b, t) => a + (b - a) * t

  function render() {
    followerX = lerp(followerX, mouseX, 0.12)
    followerY = lerp(followerY, mouseY, 0.12)

    dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`

    rafId = requestAnimationFrame(render)
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  // Cursor some ao sair da janela
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0'
    follower.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1'
    follower.style.opacity = '1'
  })

  // Hover em elementos interativos
  const interactiveSelector = 'a, button, [data-magnetic], input, textarea, select, label'
  document.querySelectorAll(interactiveSelector).forEach((el) => {
    el.addEventListener('mouseenter', () => follower.classList.add('is-hovering'))
    el.addEventListener('mouseleave', () => follower.classList.remove('is-hovering'))
  })

  // Efeito magnético — botões CTA com [data-magnetic]
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.35
      const dy = (e.clientY - cy) * 0.35
      el.style.transform = `translate(${dx}px, ${dy}px)`
    })
    el.addEventListener('mouseleave', () => {
      el.style.transform = ''
    })
  })

  render()
}
