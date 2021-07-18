
const paneEl = document.querySelector('#pane')
const mainEl = document.querySelector('#main')

window.addEventListener('hashchange', function (ev) {
  mainEl.textContent = location.hash
})

//const astReq = await fetch('/ast.json')
//const ast = await astReq.json()
