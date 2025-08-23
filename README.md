#  Start-IO (Angular 24 + SSR)

Este proyecto está construido con **Angular 24 (standalone components)** y soporta **Angular Universal (SSR)** para mejorar el SEO y el rendimiento en el renderizado inicial.  
La arquitectura está diseñada para aplicaciones escalables y modulares.

---

## 📂 Estructura del Proyecto

```
src/
├── app
│   ├── app.config.server.ts      # Configuración de Angular Universal
│   ├── app.config.ts             # Configuración principal
│   ├── app.html                  # Template base
│   ├── app.routes.server.ts      # Rutas para SSR
│   ├── app.routes.ts             # Rutas principales
│   ├── app.scss                  # Estilos globales del app shell
│   ├── app.spec.ts               # Test del componente raíz
│   ├── app.ts                    # Componente raíz
│   ├── core                      # Servicios y lógica global
│   │   ├── guards/               # Guards para rutas
│   │   ├── helpers/              # Funciones utilitarias
│   │   ├── interceptors/         # Interceptores HTTP
│   │   ├── pipes/                # Pipes globales
│   │   └── services/             # Servicios globales
│   ├── features                  # Módulos/funcionalidades principales
│   │   └── home/                 # Ejemplo de feature (Home)
│   │       └── components/       # Subcomponentes del feature
│   └── shared                    # Recursos reutilizables
│       ├── components/           # Componentes compartidos (botones, modales, etc.)
│       └── shared.module.ts      # Módulo compartido (si aplica)
├── assets
│   ├── fonts/                    # Tipografías
│   ├── images/                   # Imágenes
│   └── json/                     # Archivos JSON estáticos
├── index.html                    # Entrada principal
├── main.ts                       # Bootstrap en navegador
├── main.server.ts                # Bootstrap para SSR
├── server.ts                     # Configuración de Angular Universal
└── styles                        # Estilos globales SCSS (variables, mixins, base)
```

---

## Scripts Disponibles

- **Desarrollo**
  ```bash
  ng serve -o
  ```
  Corre la app en `http://localhost:4200`

- **SSR (Angular Universal)**
  ```bash
  npm run dev:ssr
  ```
  Renderizado del lado del servidor en `http://localhost:4200`

- **Build**
  ```bash
  ng build
  ```
  Genera la aplicación para producción en `dist/`

- **Build SSR**
  ```bash
  npm run build:ssr
  ```

- **Lint**
  ```bash
  ng lint
  ```

- **Test**
  ```bash
  ng test
  ```

---

## Convenciones

- **Core**: lógica global y servicios singleton (guards, interceptors, helpers, pipes, directives).  
- **Shared**: componentes y módulos reutilizables.  
- **Features**: cada funcionalidad aislada, con sus componentes, rutas y servicios propios.  
- **Assets**: estáticos como imágenes, fuentes o JSON.  
- **Styles**: sistema de diseño SCSS (variables, mixins, helpers).  

---

## Buenas Prácticas

1. **Lazy Loading** en `features/` para mejorar performance.  
2. Usar **standalone components** en lugar de módulos cuando sea posible.  
3. Centralizar estilos SCSS en `styles/` (variables, mixins, base).  
4. Evitar lógica de negocio en componentes → mover a servicios en `core/services`.  
5. Reutilizar `pipes` y `directives` dentro de `shared/`.  

---

## Stack

- Angular 24 (Standalone Components)
- Angular Universal (SSR)
- SCSS para estilos
- Arquitectura modular (Core / Shared / Features)

---

 Autor: **Jeffer Dev**