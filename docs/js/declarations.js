
const request = await fetch('/decl.json')
export const tree = await request.json()

export function getDeclaration (name) {
  return tree.declarations.find(x => x.name === name)
}
