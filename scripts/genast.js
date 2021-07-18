const { join } = require('path')
const { writeFile } = require('fs').promises
const { TypescriptParser } = require('typescript-parser')

const sourcePath = join(__dirname, '../../typings/index.d.ts')
const outputPath = join(__dirname, '../../docs/ast.json')

;(async function () {
  const parser = new TypescriptParser()
  const parsed = await parser.parseFile(sourcePath)

  await writeFile(outputPath, JSON.stringify(parsed.resources[0]))
})()
