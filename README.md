# Portfolio profesional personal

Base de un portfolio personal de desarrollo Full Stack y AI Engineering, construido de forma incremental. El objetivo es comunicar quién es su autor, qué problemas puede resolver, qué proyectos reales construyó, cómo trabaja y cómo puede llevar un producto desde una idea hasta producción.

El sitio debe mostrar esa combinación a través de trabajo y experiencia verificables, en lugar de limitarse a una lista de tecnologías.

## Estado actual

Esta primera etapa prepara únicamente el entorno, la arquitectura y las carpetas de referencias. La ruta `/` muestra un mensaje provisional para comprobar que el proyecto funciona.

Todavía no se definieron el diseño visual, las secciones, las animaciones ni los textos profesionales definitivos. No hay proyectos de ejemplo, métricas inventadas ni contenido profesional publicado.

## Contexto para las próximas etapas

Información proporcionada por el autor como punto de partida, pendiente de organizar y validar antes de redactar el contenido final:

- Desarrollo Full Stack con React, Next.js, TypeScript, Node.js y PostgreSQL.
- Desarrollo freelance end-to-end, deploy, dominios y puesta en producción de proyectos reales.
- AI Engineering con Python, APIs de IA, embeddings, RAG, agentes, sistemas multiagente, LangChain, LangGraph e integraciones multimodales de visión y audio.
- Experiencia en proyectos académicos, freelance y profesionales.
- Trabajo freelance como AI Trainer / Code Reviewer para Outlier, revisando Python, JavaScript y TypeScript y participando en evaluación y entrenamiento de sistemas de IA.

Entre los proyectos candidatos están ICASA, VIANSA y proyectos de AI Engineering, multiagente y RAG. La selección, las descripciones, el alcance de la participación y las evidencias se definirán con el autor más adelante.

## Stack

- Next.js 16 con App Router y React 19.
- TypeScript 6 con `strict: true`.
- Tailwind CSS 4 integrado mediante PostCSS.
- ESLint con las reglas de Next.js y TypeScript.
- npm y `package-lock.json` para instalaciones reproducibles.

TypeScript 6 y ESLint 9 usan versiones compatibles con las herramientas de linting de Next.js. ESLint 9 muestra un aviso de fin de soporte durante la instalación; se conserva por compatibilidad con los plugins de React incluidos en `eslint-config-next`. Su actualización queda pendiente de que esos plugins declaren soporte para ESLint 10. No se agregaron librerías de componentes, iconos, animaciones ni integraciones de IA en esta etapa.

## Requisitos y uso local

Usar Node.js 22.13 o superior y npm. La base se verificó con Node.js 22.19.0.

```bash
npm ci
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). Si el puerto está ocupado, Next.js indica otro puerto disponible en la terminal. Detener el servidor con `Ctrl+C`.

`npm ci` instala las versiones del lockfile. Al agregar o actualizar una dependencia de forma deliberada, usar `npm install` y conservar los cambios de `package.json` y `package-lock.json` juntos.

## Estructura

```text
portfolio/
├── public/
│   └── .gitkeep
├── references/
│   ├── design-examples/
│   │   └── .gitkeep
│   ├── my-images/
│   │   └── .gitkeep
│   ├── project-screenshots/
│   │   └── .gitkeep
│   ├── branding/
│   │   └── .gitkeep
│   └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── .gitkeep
│   ├── sections/
│   │   └── .gitkeep
│   ├── data/
│   │   └── .gitkeep
│   ├── lib/
│   │   └── .gitkeep
│   └── types/
│       └── .gitkeep
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

`node_modules/` y `.next/` son carpetas generadas y no se versionan. Next.js genera y mantiene `next-env.d.ts`, que también está ignorado en Git.

Durante el primer arranque, Next.js genera `AGENTS.md` y `CLAUDE.md` con instrucciones para consultar su documentación local antes de modificar código. Se conservan como ayuda para el trabajo incremental. El repositorio Git está inicializado, sin commits iniciales.

| Ubicación | Responsabilidad |
| --- | --- |
| `src/app/` | Rutas, layout raíz, metadatos y estilos globales del App Router. |
| `src/components/` | Componentes reutilizables cuando exista una necesidad concreta. |
| `src/sections/` | Bloques del portfolio que se construirán en etapas posteriores. |
| `src/data/` | Contenido estructurado y validado por el autor. |
| `src/lib/` | Utilidades e integraciones compartidas cuando sean necesarias. |
| `src/types/` | Tipos de dominio compartidos; los tipos locales pueden permanecer junto a su implementación. |
| `public/` | Recursos estáticos seleccionados para publicar en el sitio. |
| `references/` | Referencias y material original para analizar antes de incorporarlo al sitio. |

El alias `@/*` apunta a `src/*`. Las carpetas reservadas están vacías a propósito: no hay que crear abstracciones antes de necesitarlas.

## Dónde agregar imágenes

- Referencias de diseño: `references/design-examples/`.
- Fotografías personales: `references/my-images/`.
- Capturas de proyectos: `references/project-screenshots/`.
- Logos, iconos y recursos de identidad: `references/branding/`.

Ver [references/README.md](references/README.md) para más detalles. Una referencia visual no implica copiar un sitio completo: se acordará qué elemento interesa antes de implementarlo.

## Verificaciones

```bash
npm run lint
npm run typecheck
npm run build
```

- `lint`: revisa el código y falla ante errores o advertencias.
- `typecheck`: genera los tipos de rutas de Next.js y ejecuta TypeScript sin emitir archivos.
- `build`: genera la compilación de producción.

Después de `build`, se puede comprobar la versión de producción con `npm run start` y abrir `http://localhost:3000`.

## Forma de trabajo

1. Inspeccionar el estado del proyecto antes de hacer cambios grandes.
2. Incorporar referencias y aclarar qué interesa de cada una antes de tomar decisiones de diseño.
3. Validar con el autor los textos, proyectos, experiencia y cualquier resultado o métrica.
4. Construir y revisar una parte del sitio a la vez, manteniendo una arquitectura simple.
5. Reutilizar componentes cuando tenga sentido, mantener TypeScript estricto y agregar dependencias solo ante una necesidad concreta.
6. Ejecutar lint, chequeo de tipos y build al modificar el código o la configuración.

El diseño definitivo y la publicación quedan para etapas posteriores.

## Documentación técnica

- [Instalación y estructura mínima de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- [ESLint en Next.js](https://nextjs.org/docs/app/api-reference/config/eslint).
- [Tailwind CSS con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
