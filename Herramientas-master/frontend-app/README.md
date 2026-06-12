# Herramientas — Frontend

Frontend del sistema de gestión "Herramientas" (productos, clientes, ventas, categorías y reportes), construido con React 19, TypeScript, Vite y Tailwind CSS, usando el sistema de diseño **Neon Protocol**.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- [Bun](https://bun.sh/) 1.x (gestor de paquetes y runtime)

## Instalación de dependencias

```bash
bun install
```

> Si no tienes Bun instalado, también puedes usar `npm install`, pero se recomienda Bun para mantener la consistencia con el `bun.lockb` / lockfile del proyecto.

## Variables de entorno

Crea un archivo `.env` en la raíz de `frontend-app` (puedes basarte en las variables descritas abajo, no se incluye un `.env.example` por defecto):

| Variable        | Descripción                                                                 | Ejemplo                 |
|------------------|-----------------------------------------------------------------------------|--------------------------|
| `VITE_API_URL`   | URL base de la API backend. Si se deja vacía, se usan rutas relativas (`/api`) y el proxy de Vite. | `http://localhost:3000` |

En desarrollo, si dejas `VITE_API_URL` vacío, las peticiones a `/api` se redirigen automáticamente al backend definido en `vite.config.ts` (por defecto `http://localhost:3000`).

## Correr en modo desarrollo

```bash
bun run dev
```

Esto inicia el servidor de Vite (por defecto en `http://localhost:5173`) con hot module replacement (HMR).

> Asegúrate de tener el backend (`herramientas-node-api`) corriendo en `http://localhost:3000` para que las peticiones a `/api` funcionen correctamente.

## Build de producción

```bash
bun run build
```

Esto ejecuta el chequeo de tipos de TypeScript (`tsc -b`) y genera los archivos optimizados en la carpeta `dist/`.

Para previsualizar el build de producción localmente:

```bash
bun run preview
```

## Rutas principales

| Ruta                 | Descripción                              | Acceso     |
|----------------------|-------------------------------------------|------------|
| `/`                  | Landing page                              | Público    |
| `/login`             | Inicio de sesión                          | Público    |
| `/admin`             | Dashboard                                  | Protegido  |
| `/admin/productos`   | Gestión de productos                      | Protegido  |
| `/admin/categorias`  | Gestión de categorías                     | Protegido  |
| `/admin/clientes`    | Gestión de clientes                       | Protegido  |
| `/admin/ventas`      | Gestión de ventas                         | Protegido  |
| `/admin/reportes`    | Reportes                                   | Protegido  |

Las rutas bajo `/admin` requieren autenticación (token JWT almacenado en `localStorage`); si no hay sesión activa, se redirige automáticamente a `/login`.

## Lint

```bash
bun run lint
```
