import * as hashListener from './hashListener.js'
import { tree } from './declarations.js'

const outlineEl = document.querySelector('#root .outline')
const mainEl = document.querySelector('#root main')
const outlineContainerEl = outlineEl.querySelector('.container')

document.title = tree.name

for (const declaration of tree.declarations) {
  const objEl = document.createElement('div')
  objEl.classList.add('obj')
  objEl.textContent = declaration.name
  outlineContainerEl.appendChild(objEl)

  console.log(declaration.name, declaration)
}

hashListener.trigger()

outlineContainerEl.addEventListener('click', function (event) {
  const t = event.target
  location.hash = '#' + t.textContent
})
