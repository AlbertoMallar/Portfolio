# Portfolio profesional personal

Base de un portfolio personal de desarrollo Full Stack y AI Engineering, construido de forma incremental. El objetivo es comunicar quién es su autor, qué problemas puede resolver, qué proyectos reales construyó, cómo trabaja y cómo puede llevar un producto desde una idea hasta producción.

El sitio debe mostrar esa combinación a través de trabajo y experiencia verificables, en lugar de limitarse a una lista de tecnologías.

## Estado actual

Las rutas `/es` y `/en` muestran contenido profesional inicial basado en el CV y las aclaraciones del autor, sobre una estructura visual neutral. La ruta `/` redirige a `/es`.

Se incorporaron Hero, About y Contact, cuatro experiencias, cuatro proyectos, seis entradas de formación y cinco grupos de habilidades. El diseño definitivo y las animaciones siguen pendientes. No hay backend, API routes, Server Actions, CMS ni integraciones de IA.

La revisión de fuentes, la selección editorial y los datos faltantes se documentan en [references/professional-info/README.md](references/professional-info/README.md). No se inventaron fechas, métricas, responsabilidades, repositorios ni títulos académicos.

## Idiomas y decisiones de arquitectura

- `src/lib/locales.ts` centraliza los idiomas habilitados, el tipo `Locale`, la validación y el idioma predeterminado.
- `src/content/es.ts` y `en.ts` contienen los textos de interfaz y metadatos provisionales. Ambos usan `satisfies PortfolioContent` para exigir la misma estructura.
- `src/lib/dictionaries.ts` carga el diccionario solicitado mediante un registro tipado e imports dinámicos.
- `src/app/[locale]/page.tsx` compone las siete secciones y conecta los diccionarios con los datos. Los componentes reciben textos por props.
- El layout raíz vive en `src/app/[locale]/layout.tsx`. No hay un segundo `src/app/layout.tsx`: así, `<html lang>` recibe `es` o `en` desde el HTML inicial sin middleware ni un idioma fijo en un layout superior.
- `generateStaticParams` genera las páginas de los idiomas habilitados. La validación de `Locale` en el layout, los metadatos y la página devuelve 404 con `notFound()` para idiomas no admitidos, como `/fr`.
- `next.config.ts` redirige `/` al idioma predeterminado con HTTP 307. El selector permite cambiar de idioma y declara `hrefLang`, `lang` y `aria-current`.

No se detecta automáticamente el idioma del navegador ni se agrega una librería de internacionalización. Se usan Server Components de Next.js para generar las páginas durante el build; no se incorpora un backend al proyecto.

### Agregar otro idioma

1. Agregar su identificador a `locales` en `src/lib/locales.ts`.
2. Crear `src/content/<locale>.ts` con la estructura `PortfolioContent` y registrar su import en `src/lib/dictionaries.ts`.
3. Agregar su nombre a `common.languageNames` en los diccionarios y su futura ruta de CV en `src/lib/assets.ts`.
4. Completar las traducciones del nuevo idioma en los campos `LocalizedText` de los datos que existan.
5. Ejecutar lint, typecheck y build.

Los tipos detectan idiomas o claves faltantes. Los componentes no necesitan cambiar.

## Contenido y tipos

Los textos de interfaz pertenecen a `content/`; los registros profesionales, a `data/`; y la presentación, a componentes y secciones. El alias `@/*` apunta a `src/*`.

Los tipos de [src/types/portfolio.ts](src/types/portfolio.ts) incluyen:

| Tipo | Uso |
| --- | --- |
| `LocalizedText` | Un texto por idioma habilitado: `Readonly<Record<Locale, string>>`. |
| `PortfolioContent` | Estructura compartida de los diccionarios. |
| `Profile` | Nombre, ubicación y contacto compartidos entre idiomas. |
| `SectionContent` y `SectionId` | Título, cuerpo opcional e identificadores de las secciones. |
| `Project` | Proyecto reutilizable con traducciones y campos opcionales. |
| `PortfolioImage` | Ruta bajo `/images/`, alt traducido y dimensiones opcionales. |
| `Experience` | Rol traducido; organización, descripción, fechas, logros y tecnologías opcionales. |
| `Education` | Educación o certificación con título traducido y datos complementarios opcionales. |
| `SkillGroup` | Grupo de habilidades con título traducido y nombres de tecnologías. |
| `SkillItem` | Nombre de tecnología compartido o concepto con etiqueta traducida. |

`Project` exige `id`, `slug`, `title`, `technologies` y `category`. Admite descripciones, imágenes, enlaces, destacado, año, fechas y contexto profesional/académico como campos opcionales. Los enlaces usan `HttpUrl`; no se requieren repositorios ni demos cuando no existen.

Agregar información confirmada en `src/data/projects.ts`, `experience.ts`, `education.ts` y `skills.ts`. Los campos traducibles usan `LocalizedText` para evitar duplicar IDs, tecnologías y enlaces. `sections.about.body` y `sections.contact.body` permiten agregar textos en los diccionarios.

Las secciones muestran títulos, textos, fechas, responsabilidades, tecnologías y enlaces conocidos. `Period` conserva la precisión de las fechas y localiza los meses y la etiqueta de actualidad con `Intl`; `ProfileLinks` comparte los enlaces personales entre Hero y Contact. `Section` mantiene la estructura semántica sin anticipar un diseño de tarjetas.

Las experiencias incorporadas son desarrollo Full Stack freelance, AI Trainer / Code Reviewer para Outlier, Full Stack Teaching Assistant de Henry y administración de propiedades. Las fichas individuales de proyectos de IA quedan pendientes de documentación específica; no se agruparon automáticamente en un proyecto único.

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
- TypeScript 6 con `strict: true` y `allowJs: false`.
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

Abrir [http://localhost:3000/es](http://localhost:3000/es) o [http://localhost:3000/en](http://localhost:3000/en). Si el puerto está ocupado, Next.js indica otro puerto disponible en la terminal. Detener el servidor con `Ctrl+C`.

`npm ci` instala las versiones del lockfile. Al agregar o actualizar una dependencia de forma deliberada, usar `npm install` y conservar los cambios de `package.json` y `package-lock.json` juntos.

## Estructura

```text
portfolio/
├── public/
│   ├── cv/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── branding/
│   └── icons/
├── references/
│   ├── design-examples/
│   │   └── .gitkeep
│   ├── my-images/
│   │   └── .gitkeep
│   ├── project-screenshots/
│   │   ├── icasa/
│   │   ├── viansa/
│   │   └── ai-engineering/
│   ├── branding/
│   │   └── .gitkeep
│   ├── professional-info/
│   │   ├── cv/CV-English2026.pdf
│   │   ├── linkedin/
│   │   ├── github/
│   │   └── README.md
│   └── README.md
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/Section.tsx
│   │   ├── layout/SiteHeader.tsx
│   │   └── common/
│   │       ├── LanguageSwitcher.tsx
│   │       ├── Period.tsx
│   │       └── ProfileLinks.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── content/
│   │   ├── es.ts
│   │   └── en.ts
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── skills.ts
│   ├── lib/
│   │   ├── locales.ts
│   │   ├── dictionaries.ts
│   │   ├── assets.ts
│   │   └── dates.ts
│   └── types/
│       └── portfolio.ts
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

Durante el primer arranque, Next.js genera `AGENTS.md` y `CLAUDE.md` con instrucciones para consultar su documentación local antes de modificar código. Se conservan como ayuda para el trabajo incremental. Las carpetas vacías de assets contienen `.gitkeep`.

| Ubicación | Responsabilidad |
| --- | --- |
| `src/app/` | Rutas, layout raíz, metadatos y estilos globales del App Router. |
| `src/components/` | Componentes reutilizables cuando exista una necesidad concreta. |
| `src/sections/` | Siete bloques del portfolio con estructura mínima y datos por props. |
| `src/content/` | Diccionarios tipados de textos y metadatos por idioma. |
| `src/data/` | Contenido estructurado y validado por el autor. |
| `src/lib/` | Utilidades e integraciones compartidas cuando sean necesarias. |
| `src/types/` | Tipos de dominio compartidos; los tipos locales pueden permanecer junto a su implementación. |
| `public/` | Recursos estáticos seleccionados para publicar en el sitio. |
| `references/` | Referencias y material original para analizar antes de incorporarlo al sitio. |

No hay que crear abstracciones antes de necesitarlas. La estructura mantiene componentes específicos para cada sección y reutiliza solamente la infraestructura común.

## CV y assets públicos

Colocar los dos PDFs reales con estos nombres exactos:

```text
public/cv/alberto-mallar-cv-es.pdf
public/cv/alberto-mallar-cv-en.pdf
```

Todavía no hay PDFs públicos. El CV inglés de `references/` se utiliza como fuente y no se publica automáticamente. [src/lib/assets.ts](src/lib/assets.ts) define las rutas y `availableCvLocales`: agregar un idioma a esa lista solamente después de colocar su PDF real en `public/cv/`. `getCvHref(locale)` habilita la descarga correspondiente en Hero con el atributo `download` y una etiqueta del diccionario. Mientras la lista esté vacía, no se muestra un enlace a un archivo ausente.

| Carpeta | Recursos que se publicarán |
| --- | --- |
| `public/images/profile/` | Fotografías personales seleccionadas. |
| `public/images/projects/` | Capturas e imágenes de proyectos seleccionadas. |
| `public/images/branding/` | Logos y recursos de identidad aprobados. |
| `public/icons/` | Iconos que vaya a consumir el sitio. |

Los archivos de `public/` se referencian sin el prefijo `public`: por ejemplo, `/images/profile/foto.webp`. Después de agregar contenido y recursos, reconstruir el sitio antes de publicarlo.

## Dónde agregar referencias de trabajo

- Referencias de diseño: `references/design-examples/`.
- Fotografías personales: `references/my-images/`.
- Capturas de proyectos: `references/project-screenshots/icasa/`, `viansa/` o `ai-engineering/`.
- Logos, iconos y recursos de identidad: `references/branding/`.

Ver [references/README.md](references/README.md) para más detalles. Una referencia visual no implica copiar un sitio completo: se acordará qué elemento interesa antes de implementarlo.

`references/` no se sirve desde el sitio ni se importa automáticamente. Cuando decidamos utilizar una imagen, la copiaremos o moveremos al lugar correspondiente de `public/`.

## Accesibilidad y SEO inicial

La página tiene un solo `h1`, secciones con `h2` y `aria-labelledby`, un `main` identificable, enlace para saltar al contenido y navegación de idioma accesible. Las imágenes de proyectos exigen texto alternativo traducido en los datos.

El idioma y los metadatos básicos se generan para cada ruta. Canonical, alternates SEO, Open Graph, sitemap, dominio y metadatos definitivos quedan pendientes hasta confirmar el contenido y la publicación. No se inventa un dominio de producción.

## Verificaciones

```bash
npm run lint
npm run typecheck
npm run build
```

- `lint`: revisa el código y falla ante errores o advertencias.
- `typecheck`: genera los tipos de rutas de Next.js y ejecuta TypeScript sin emitir archivos.
- `build`: genera la compilación de producción y las rutas de idioma estáticas.

Después de `build`, comprobar la versión de producción con `npm run start` y revisar `/`, `/es`, `/en` y una ruta de idioma no habilitado.

## Forma de trabajo

1. Inspeccionar el estado del proyecto antes de hacer cambios grandes.
2. Incorporar referencias y aclarar qué interesa de cada una antes de tomar decisiones de diseño.
3. Validar con el autor los textos, proyectos, experiencia y cualquier resultado o métrica.
4. Construir y revisar una parte del sitio a la vez, manteniendo una arquitectura simple.
5. Reutilizar componentes cuando tenga sentido, mantener TypeScript estricto y agregar dependencias solo ante una necesidad concreta.
6. Ejecutar lint, chequeo de tipos y build al modificar el código o la configuración.

El diseño definitivo y la publicación quedan para etapas posteriores.

La próxima etapa debe revisar este contenido inicial, documentar las fichas individuales de IA, incorporar los PDFs y recursos reales, y analizar las referencias antes de decidir el diseño.

## Documentación técnica

- [Instalación y estructura mínima de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- [Internacionalización y layouts de Next.js](https://nextjs.org/docs/app/guides/internationalization).
- [ESLint en Next.js](https://nextjs.org/docs/app/api-reference/config/eslint).
- [Tailwind CSS con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
