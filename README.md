# Portfolio — Alberto Mallar

Portfolio profesional de Software & AI Engineering, construido incrementalmente con Next.js App Router, React, TypeScript estricto y Tailwind CSS.

## Estado: V1 visual

Primera propuesta visual, abierta a revisión: base oscura, contraste alto, acentos verde agua, fotografía rectangular, líneas técnicas discretas y transiciones CSS. Las rutas `/es` y `/en` comparten componentes; `/` redirige a `/es`.

La home contiene, en orden:

1. Navbar y selector de idioma.
2. Hero con posicionamiento, foto, proyectos, CV disponible y enlaces profesionales.
3. Featured Projects: ICASA y VIANSA.
4. About.
5. Experience: freelance, Outlier y Henry; propiedades como experiencia complementaria.
6. Selected AI Work: M2, M3 y M4.
7. Technologies: siete tecnologías principales y capacidades adicionales por categoría.
8. Education & Certifications: las seis entradas existentes, priorizando Henry.
9. Other Projects: Videogames App, Descuentos Ya y M1.
10. Contact.
11. Footer.

PI sigue pendiente de identidad/repositorio y no tiene una ficha pública. Azure no estaba modelada y no se agregó. Medicina y los proyectos académicos existentes se conservaron.

## Separación de responsabilidades

| Ubicación                    | Responsabilidad                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/`                  | Perfil, proyectos, experiencia, educación y tecnologías. URLs, IDs y fechas compartidos; textos traducibles con LocalizedText.     |
| `src/content/es.ts`, `en.ts` | Textos de interfaz, encabezados, navegación y metadatos; ambos satisfacen PortfolioContent.                                        |
| `src/types/portfolio.ts`     | Contratos de dominio y diccionarios.                                                                                               |
| `src/sections/`              | Composición de los bloques.                                                                                                        |
| `src/components/`            | ProjectCard/ProjectPreview, TechnologyIcon, ExperienceItem, CertificationCard, SectionHeading, Icon, enlaces, navegación y footer. |
| `src/app/globals.css`        | Tokens, layout, breakpoints, superficies y motion de la propuesta visual.                                                          |
| `src/lib/`                   | Idiomas, diccionarios, fechas y disponibilidad de CV.                                                                              |
| `public/`                    | Assets seleccionados para publicar.                                                                                                |
| `references/`                | Material original y documentación interna; no se sirve ni importa automáticamente.                                                 |

`Project.images` permite incorporar capturas reales sin cambiar las cards. `Project.preview` describe esquemas conceptuales para los proyectos de IA; no son screenshots, trazas ni resultados de ejecución.

Se actualizó el contenido público con hechos ya documentados de M1–M4 y educación. PHP figura en el perfil interno; Docker y REST APIs fueron incluidos por indicación explícita de la solicitud visual. No se agregaron fechas precisas de proyectos de IA, métricas nuevas ni URLs privadas.

## Assets de esta V1

- Fotografía: copia intacta de `references/my-images/foto2.jpg` en `public/images/profile/alberto-mallar.jpg` (137 KB). Next Image sirve variantes optimizadas con tamaños responsive.
- CV inglés: copia del PDF público existente en `public/cv/alberto-mallar-cv-en.pdf`.
- CV español: pendiente. Agregar `public/cv/alberto-mallar-cv-es.pdf` y habilitar `es` en `availableCvLocales`, en `src/lib/assets.ts`.
- Logos: 19 SVG locales de Simple Icons; fuente y licencia en [public/icons/technologies/README.md](public/icons/technologies/README.md).
- Iconos de interfaz: SVG en `Icon.tsx`. Las tecnologías sin logo disponible tienen un símbolo genérico acompañado por su nombre.
- Capturas de sitios y proyectos: todavía pendientes. Los placeholders están rotulados explícitamente.

Los originales de las fotografías se conservan. No se copian los certificados ni documentos internos a public automáticamente.

## Screenshots a preparar

Guardar primero los originales en `references/project-screenshots/`. Para publicar, seleccionar copias optimizadas en `public/images/projects/` y completar `Project.images` con ruta, alt en ambos idiomas y dimensiones.

| Proyecto | Capturas recomendadas                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ICASA    | Home con navbar y Hero; galería/Proyectos; Contacto. Una captura desktop 1440×900 y otra mobile 390×844 para comprobar responsive. |
| VIANSA   | Home con Hero multimedia; navegación en español e inglés; una sección de Plantines/Servicios. Desktop 1440×900 y mobile 390×844.   |
| M2       | Consulta CLI y respuesta con referencias a chunks; ejemplo de retrieval sobre documentación ficticia.                              |
| M3       | Routing y respuesta de un especialista; traza seleccionada de Langfuse con información apta para mostrar.                          |
| M4       | Imágenes de contratos de prueba autorizados, salida estructurada y etapas de la traza.                                             |
| M1       | Consulta sintética de soporte y JSON de respuesta; métricas solo si se decide mostrarlas con su contexto.                          |

Para previews de cards, preferir recortes de proporción 16:10, ancho aproximado de 1200 px y WebP optimizado. No fabricar pantallas, certificados ni valores de salida. No incorporar claves, datos personales de terceros, contratos privados o prompts confidenciales.

## Responsive, accesibilidad y performance

- Grids fluidos: proyectos profesionales en dos columnas; AI en tres/dos/una; cards de educación en tres/dos/una.
- Hero de dos columnas a una; fotografía con dimensiones reservadas y object-fit.
- Menú móvil accesible con aria-expanded, cierre al navegar y Escape; único componente propio con estado de cliente.
- Un h1, ocho h2, landmarks, skip link, foco visible, alt localizado e iconos decorativos fuera del árbol accesible.
- Detalles ampliables nativos para descripciones de proyectos y experiencia complementaria.
- Sin dependencias nuevas de UI o motion; logos locales sin CDN en runtime, Server Components y CSS para hover/entrada.
- `prefers-reduced-motion` desactiva animaciones, transiciones y scroll suave.
- No hay CMS, backend, formulario conectado ni ejecución de los sistemas de IA en este sitio.

## Desarrollo y verificación

Node.js 22.13 o superior; npm y lockfile.

```bash
npm ci
npm run dev
```

Abrir [español](http://localhost:3000/es) o [inglés](http://localhost:3000/en).

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Verificar idiomas, menú móvil, enlaces, descargas disponibles, tamaños de pantalla y motion reducido. Un idioma no admitido devuelve 404. La documentación profesional interna tampoco debe estar accesible por HTTP.

## Próxima revisión

Revisar esta V1 visual, completar screenshots y CV español, seleccionar posibles imágenes de certificados y ajustar composición o dirección visual. Los datos permanecen separados de la presentación para permitir un rediseño.

Dominio de publicación, canonical, Open Graph definitivo, sitemap y despliegue quedan para una etapa posterior autorizada.
