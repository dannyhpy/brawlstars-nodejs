
const outlineEl = document.querySelector('#root .outline')
const mainEl = document.querySelector('#root main')
const outlineContainerEl = outlineEl.querySelector('.container')

function onHashChange () {
  mainEl.textContent = 'dbg hash: ' + location.hash

  for (const child of outlineContainerEl.children) {
    if (child.classList.contains('curr')) child.classList.remove('curr')
    if (child.textContent === location.hash.slice(1)) {
      child.classList.add('curr')
    }
  }
}

window.addEventListener('hashchange', onHashChange)

export const trigger = onHashChange
