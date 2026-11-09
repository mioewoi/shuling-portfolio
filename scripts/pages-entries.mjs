import { readFile, mkdir, copyFile, writeFile } from 'node:fs/promises'
import ts from 'typescript'

// Derive entry points from the existing project list so new cases deploy automatically.
const source = await readFile(new URL('../src/data/projectDetails.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
const { projectDetails } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
for (const route of ['about', ...Object.keys(projectDetails).map(slug => `projects/${slug}`)]) {
  if (!/^[a-z0-9/-]+$/.test(route)) throw new Error(`Invalid deployment route: ${route}`)
  await mkdir(`dist/${route}`, { recursive: true })
  await copyFile('dist/index.html', `dist/${route}/index.html`)
}
await copyFile('dist/index.html', 'dist/404.html')
await writeFile('dist/.nojekyll', '')
console.log(`Created Pages entries for About and ${Object.keys(projectDetails).length} projects.`)
