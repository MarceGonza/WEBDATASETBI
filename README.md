# DATASETBI web

Sitio estático hecho con Vite + React.

## Deploy automático a `public_html`

El repositorio incluye un workflow en `.github/workflows/deploy.yml` que:

1. instala dependencias con `npm ci`
2. compila el sitio con `npm run build`
3. sube el contenido de `dist/` al directorio `/public_html/` del hosting

El deploy se ejecuta cuando hacés push a la rama `main` o cuando lo corrés manualmente desde GitHub Actions.

## Secrets de GitHub necesarios

En GitHub, abrí:

`Settings` → `Secrets and variables` → `Actions` → `New repository secret`

Cargá estos secretos:

- `FTP_SERVER`: `l0080774.ferozo.com`
- `FTP_USERNAME`: `l0080774`
- `FTP_PASSWORD`: tu contraseña FTP

> Importante: no dejes las credenciales escritas en el repositorio. GitHub las enmascara si están guardadas como secrets.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
```

El resultado queda en `dist/`.