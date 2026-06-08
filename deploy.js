#!/usr/bin/env node
/**
 * Script de despliegue rápido para producción
 * Regenera el HTML estático y verifica su integridad
 */
import { execSync } from 'child_process'

console.log('🚀 Iniciando proceso de despliegue...\n')

try {
  console.log('1️⃣  Generando HTML estático...')
  execSync('node build-static.js', { stdio: 'inherit' })
  
  console.log('\n2️⃣  Verificando integridad...')
  execSync('node verify-scrappeable.js', { stdio: 'inherit' })
  
  console.log('\n✅ ¡Despliegue completado exitosamente!')
  console.log('\n📋 Próximos pasos:')
  console.log('   1. Sube el archivo "index.html" a tu servidor')
  console.log('   2. Asegúrate de que la carpeta "/assets" esté accesible')
  console.log('   3. Configura tu servidor para servir "index.html" como raíz')
  console.log('\n💡 Verifica que la página cargue correctamente:')
  console.log('   https://datasetbi.com\n')
  
} catch (error) {
  console.error('\n❌ Error durante el despliegue:', error.message)
  process.exit(1)
}
