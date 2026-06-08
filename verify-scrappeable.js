#!/usr/bin/env node
/**
 * Script de verificación: Confirma que el HTML es scrappeable
 * Realiza checks de:
 * - Presencia de contenido estático
 * - Ausencia de placeholder "Cargando..."
 * - Metadatos SEO
 * - Accesibilidad
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const htmlPath = path.join(__dirname, 'dist', 'index.html')

console.log('🔍 Verificando que el HTML es scrappeable...\n')

if (!fs.existsSync(htmlPath)) {
  console.error('❌ El archivo dist/index.html no existe. Ejecuta "npm run build:scrapeable" o "npm run static" primero.')
  process.exit(1)
}

const html = fs.readFileSync(htmlPath, 'utf-8')

// Checks
const checks = [
  {
    name: 'HTML contiene contenido estático',
    test: () =>
      html.includes('Construimos la <span class="hero-emphasis">inteligencia</span>') &&
      html.includes('Problemática'),
  },
  {
    name: 'Contenedor root prerenderizado',
    test: () => html.includes('<div id="root"><'),
  },
  {
    name: 'Contiene título y meta description',
    test: () => html.includes('<title>') && html.includes('description'),
  },
  {
    name: 'Recursos de frontend presentes',
    test: () => html.includes('/assets/') && (html.includes('<link rel="stylesheet"') || html.includes('<style>')),
  },
  {
    name: 'Sin placeholder de carga',
    test: () => !html.includes('Cargando sitio'),
  },
  {
    name: 'Estructura semántica (header, main, footer)',
    test: () => html.includes('<header') && html.includes('<main') && html.includes('<footer'),
  },
  {
    name: 'Todas las secciones principales presentes',
    test: () => {
      const sections = ['inicio', 'problematica', 'solucion', 'contacto', 'quienes-somos']
      return sections.every(s => html.includes(`id="${s}"`))
    },
  },
  {
    name: 'Enlaces internos funcionales',
    test: () => html.includes('href="#contacto"') && html.includes('href="#solucion"'),
  },
  {
    name: 'Atributos de accesibilidad (aria-label)',
    test: () => html.match(/aria-label/g)?.length > 5,
  },
  {
    name: 'Imágenes con alt text',
    test: () => html.match(/alt="/g)?.length >= 2,
  },
]

let passed = 0
let failed = 0

checks.forEach((check) => {
  const result = check.test()
  const icon = result ? '✅' : '❌'
  const status = result ? 'PASS' : 'FAIL'
  console.log(`${icon} ${check.name} [${status}]`)
  
  if (result) passed++
  else failed++
})

console.log('\n' + '='.repeat(60))
console.log(`📊 Resultados: ${passed} pasado, ${failed} fallido de ${checks.length}`)

if (failed === 0) {
  console.log('✅ ¡HTML completamente scrappeable! Listo para agentes de IA.')
  console.log('\n💡 Puedes servir directamente:')
  console.log('   - dist/index.html como raíz del sitio publicado')
  console.log('   - O el contenido completo de dist/ en tu servidor web')
  process.exit(0)
} else {
  console.log('⚠️  Hay problemas a revisar. Ejecuta "npm run build:scrapeable" y verifica.')
  process.exit(1)
}
