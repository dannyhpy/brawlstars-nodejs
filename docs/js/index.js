import * as hashListener from './hashListener.js'

const outlineEl = document.querySelector('#root .outline')
const mainEl = document.querySelector('#root main')
const outlineContainerEl = outlineEl.querySelector('.container')

const declReq = await fetch('/decl.json')
const declFile = await declReq.json()

document.title = declFile.name

for (const declaration of declFile.declarations) {
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
