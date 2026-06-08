#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')
const clientIndexPath = path.join(distDir, 'index.html')
const serverDir = path.join(distDir, 'server')
const sourceAssetsPath = path.join(__dirname, 'assets')
const targetAssetsPath = path.join(distDir, 'assets')

function findServerEntry(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const nested = findServerEntry(fullPath)
      if (nested) return nested
    }

    if (entry.isFile() && entry.name.endsWith('.js')) {
      return fullPath
    }
  }

  return null
}

if (!fs.existsSync(clientIndexPath)) {
  console.error('❌ Falta dist/index.html. Ejecuta primero el build del cliente.')
  process.exit(1)
}

if (!fs.existsSync(serverDir)) {
  console.error('❌ Falta dist/server. Ejecuta primero el build SSR.')
  process.exit(1)
}

const serverEntryPath = findServerEntry(serverDir)

if (!serverEntryPath) {
  console.error('❌ No se encontró el bundle SSR para prerenderizar la app.')
  process.exit(1)
}

const { render } = await import(pathToFileURL(serverEntryPath).href)

if (typeof render !== 'function') {
  console.error('❌ El bundle SSR no exporta una función render().')
  process.exit(1)
}

const appHtml = render()
const clientHtml = fs.readFileSync(clientIndexPath, 'utf-8')

if (!clientHtml.includes('<div id="root"></div>')) {
  console.error('❌ La plantilla del cliente no tiene el contenedor esperado para prerenderizar.')
  process.exit(1)
}

const prerenderedHtml = clientHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

if (fs.existsSync(sourceAssetsPath)) {
  fs.cpSync(sourceAssetsPath, targetAssetsPath, { recursive: true })
}

fs.writeFileSync(clientIndexPath, prerenderedHtml, 'utf-8')
fs.rmSync(serverDir, { recursive: true, force: true })

console.log('✅ App React prerenderizada en dist/index.html')
console.log(`📄 Archivo: ${clientIndexPath}`)
