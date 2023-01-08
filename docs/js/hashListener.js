import { getDeclaration } from './declarations.js'

const outlineEl = document.querySelector('#root .outline')
const mainEl = document.querySelector('#root main')
const outlineContainerEl = outlineEl.querySelector('.container')

function onHashChange () {
  // Update sidebar
  for (const child of outlineContainerEl.children) {
    if (child.classList.contains('curr')) child.classList.remove('curr')
    if (child.textContent === location.hash.slice(1)) {
      child.classList.add('curr')
    }
  }

  // Display information
  const contentEl = document.createElement('div')
  const title = location.hash.slice(1)
  const titleEl = document.createElement('h1')
  titleEl.textContent = title
  const propertiesTitleEl = document.createElement('h4')
  propertiesTitleEl.textContent = 'PROPERTIES'
  contentEl.appendChild(titleEl)
  contentEl.appendChild(propertiesTitleEl)

  ;(function () {
    const declaration = getDeclaration(title)
    if (declaration == null) return

    for (const property of declaration.properties) {
      const propEl = document.createElement('div')
      const propClassNameEl = document.createElement('span')
      propClassNameEl.textContent = title + '.'
      const propNameEl = document.createElement('b')
      propNameEl.textContent = property.name
      const propSepEl = document.createElement('span')
      propSepEl.textContent = ': '
      const propTypeEl = document.createElement('code')
      propTypeEl.textContent = property.type + (property.isOptional ? '?' : '')

      propEl.appendChild(propClassNameEl)
      propEl.appendChild(propNameEl)
      propEl.appendChild(propSepEl)
      propEl.appendChild(propTypeEl)
      contentEl.appendChild(propEl)
    }
  })()

  mainEl.innerHTML = ''
  mainEl.appendChild(contentEl)
}

window.addEventListener('hashchange', onHashChange)

export const trigger = onHashChange
