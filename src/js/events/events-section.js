function formatMonthYear(dateValue) {
  if (!dateValue) {
    return 'Data nao informada'
  }

  const parsed = new Date(`${dateValue}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) {
    return 'Data nao informada'
  }

  const label = new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric',
  }).format(parsed)

  return label.replace('.', '').replace(/^./, (char) => char.toUpperCase())
}

function sortByDateDesc(items) {
  return [...items].sort((left, right) => {
    const l = left.date ? new Date(`${left.date}T00:00:00`).getTime() : Number.NEGATIVE_INFINITY
    const r = right.date ? new Date(`${right.date}T00:00:00`).getTime() : Number.NEGATIVE_INFINITY
    return r - l
  })
}

function renderCard(item) {
  const article = document.createElement('article')
  article.className = 'evento-card'

  const link = document.createElement('a')
  link.className = 'evento-card__link'
  link.href = item.googlePhotosUrl
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.setAttribute('aria-label', `Abrir album ${item.title} no Google Photos`)

  const media = document.createElement('div')
  media.className = 'evento-card__media'

  const image = document.createElement('img')
  image.className = 'evento-card__image'
  image.loading = 'lazy'
  image.decoding = 'async'
  image.src = item.thumbnailUrl
  image.alt = `Thumbnail do album ${item.title}`
  media.appendChild(image)

  const body = document.createElement('div')
  body.className = 'evento-card__body'

  const title = document.createElement('h3')
  title.className = 'evento-card__title'
  title.textContent = item.shortTitle

  const meta = document.createElement('p')
  meta.className = 'evento-card__meta'
  meta.textContent = item.monthYearLabel || formatMonthYear(item.date)

  const cta = document.createElement('span')
  cta.className = 'evento-card__cta'
  cta.textContent = 'Abrir album'

  body.append(title, meta, cta)
  link.append(media, body)
  article.appendChild(link)

  return article
}

export async function initEventsSection() {
  const section = document.getElementById('eventos-realizados')
  const grid = document.getElementById('eventos-grid')
  const status = document.getElementById('eventos-status')

  if (!section || !grid || !status) {
    return
  }

  const endpoint = section.dataset.eventsEndpoint || '/data/events-albums.json'

  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(`Falha ao carregar eventos: ${response.status}`)
    }

    const payload = await response.json()
    const items = Array.isArray(payload?.albums) ? payload.albums : []

    if (items.length === 0) {
      status.textContent = 'Nenhum evento encontrado no momento.'
      return
    }

    const sortedItems = sortByDateDesc(items)
    const fragment = document.createDocumentFragment()

    for (const item of sortedItems) {
      fragment.appendChild(renderCard(item))
    }

    grid.innerHTML = ''
    grid.appendChild(fragment)
    grid.hidden = false
    status.hidden = true
  } catch (error) {
    console.warn(error)
    status.textContent = 'Nao foi possivel carregar os eventos agora. Tente novamente em instantes.'
  }
}
