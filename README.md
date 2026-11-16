# Portfolio — Alberto Mallar

Portfolio profesional de Software Developer | AI Engineering, construido incrementalmente con Next.js App Router, React, TypeScript estricto y Tailwind CSS.

## Estado: V1 visual

Primera propuesta visual, abierta a revisión: base oscura, contraste alto, acentos verde agua, fotografía rectangular, líneas técnicas discretas y transiciones CSS. Las rutas `/es`, `/en` y `/de` comparten componentes; `/` redirige a `/es`.

La home contiene, en orden:

1. Navbar y selector de idioma.
2. Hero con posicionamiento, foto, proyectos, CV disponible y enlaces profesionales.
3. Qué puedo aportar / What I can bring: Full Stack, AI Engineering, de la necesidad a producción, clientes y equipos.
4. Trabajo profesional: ICASA y VIANSA.
5. About: del problema a la solución.
6. Experience: Freelance, ITC, Outlier y Henry; Property Management y LFI / El Alargue como experiencia complementaria compacta.
7. Evidencia profesional: proyectos en producción, selección como reviewer en Outlier y evolución práctica en AI Engineering.
8. Selected AI Work: M4, M3 y M2.
9. Technologies: siete tecnologías principales y capacidades adicionales por categoría.
10. Education & Certifications: AI Engineering, Full Stack, Ingeniería en Computación, Python, OutlierEDU e inglés.
11. Other Projects: JobTracker, M1, Videogames App / PI y Descuentos Ya.
12. Contact.
13. Footer.

Videogames App / PI se presenta como el primer proyecto Full Stack, desarrollado manualmente sin IA generativa; no se agrega una URL de repositorio sin confirmar. JobTracker es un proyecto personal en equipo de 2023, con repositorio privado y sin código generado por IA. Azure no está modelada y no se presenta como tecnología dominada.

## Correcciones de contenido de la V1

La revisión de contenido del 2026-10-13 aplica los datos explícitos del autor, que tienen prioridad sobre el CV y las fichas internas anteriores:

- Software Developer | Freelance: 2022–Actualidad, desde el relevamiento hasta producción; proyectos y colaboraciones con ICASA, VIANSA y Sensus3D.
- Software Developer | ITC: abril–mayo de 2025, herramienta interna en PHP para el trabajo operativo de técnicos de campo.
- Henry Teaching Assistant: 2023–2025, experiencia finalizada.
- Outlier: diciembre de 2023–abril de 2025; entrenamiento, evaluación y revisión de sistemas de IA; seleccionado como reviewer durante 2024 por su desempeño.
- Property Management: octubre de 2019–Actualidad; LFI / El Alargue: julio de 2015–noviembre de 2016. Ambas entradas usan `Experience.secondary` para conservar el formato compacto existente. BlowMax queda fuera de la selección.
- Curso de Python: 2022. La referencia interna a Sensus3D's Software Engineer se conserva en `references/professional-info/`; no se infiere que sea una institución emisora.
- Ingeniería en Computación: cuatro años cursados, carrera no finalizada; no se presenta un título obtenido.
- Medicina queda excluida. Se diferencia el nivel profesional actual English — C2 Proficient del certificado EF SET — C1 Advanced. No se infieren una certificación C2, fecha de expedición, puntuación ni enlace.
- Technologies mantiene las siete tecnologías principales y organiza las herramientas por contexto. AI Engineering reúne OpenAI APIs, LangChain, LangGraph, Langfuse, Pydantic, embeddings, RAG, agentes, sistemas multiagente, IA multimodal y structured outputs.
- M4 usa LangChain con orquestación secuencial, OpenAI Vision/multimodal, Pydantic, Langfuse y structured outputs; no utiliza LangGraph. M3 sí utiliza LangGraph. El orden de presentación es M4 → M3 → M2.
- Descuentos Ya se conserva como proyecto académico, sin enlace al deploy caído.

Hero, metadatos y narrativa se alinean con Software Developer | AI Engineering en español e inglés; la ruta alemana existente se mantiene compatible. Se reutilizan componentes, estilos y animaciones, con ajustes mínimos para las nuevas secciones. Las URLs e imágenes de ICASA y VIANSA y el contenido original del CV descargable se conservan.

## Separación de responsabilidades

| Ubicación                    | Responsabilidad                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/`                  | Perfil, proyectos, experiencia, educación y tecnologías. URLs, IDs y fechas compartidos; textos traducibles con LocalizedText.     |
| `src/content/es.ts`, `en.ts`, `de.ts` | Textos de interfaz, encabezados, navegación y metadatos; todos satisfacen PortfolioContent.                               |
| `src/types/portfolio.ts`     | Contratos de dominio y diccionarios.                                                                                               |
| `src/sections/`              | Composición de los bloques.                                                                                                        |
| `src/components/`            | ProjectCard/ProjectPreview, TechnologyIcon, ExperienceItem, CertificationCard, SectionHeading, Icon, enlaces, navegación y footer. |
| `src/app/globals.css`        | Tokens, layout, breakpoints, superficies y motion de la propuesta visual.                                                          |
| `src/lib/`                   | Idiomas, diccionarios, fechas y disponibilidad de CV.                                                                              |
| `public/`                    | Assets seleccionados para publicar.                                                                                                |
| `references/`                | Material original y documentación interna local, excluida de Git; no se sirve ni importa automáticamente.                          |

`Project.images` permite incorporar capturas reales sin cambiar las cards. `Project.preview` describe esquemas conceptuales para los proyectos de IA; no son screenshots, trazas ni resultados de ejecución.

Se actualizó el contenido público con hechos ya documentados de M1–M4 y educación. PHP figura en el perfil interno; Docker y REST APIs fueron incluidos por indicación explícita de la solicitud visual. No se agregaron fechas precisas de proyectos de IA, métricas nuevas ni URLs privadas.

## Assets de esta V1

- Fotografía: copia intacta de `references/my-images/foto2.jpg` en `public/images/profile/alberto-mallar.jpg` (137 KB). Next Image sirve variantes optimizadas con tamaños responsive.
- CV inglés: `public/cv/Alberto_Mallar_CV_EN_2026.pdf`, disponible para descargar desde `/en`.
- CV español: `public/cv/Alberto_Mallar_CV_ES_2026.pdf`, disponible para descargar desde `/es`.
- CV alemán: pendiente; `/de` muestra el estado correspondiente sin enlazar un archivo inexistente.
- Logos: 19 SVG locales de Simple Icons; fuente y licencia en [public/icons/technologies/README.md](public/icons/technologies/README.md).
- Iconos de interfaz: SVG en `Icon.tsx`. Las tecnologías sin logo disponible tienen un símbolo genérico acompañado por su nombre.
- Capturas de ICASA y VIANSA: copias intactas de `references/project-screenshots/icasa/icasa-home.png` y `references/project-screenshots/viansa/viansa-home.jpeg` en `public/images/projects/`. Reemplazan los placeholders en los tres idiomas; Next Image optimiza su entrega y se muestran completas, sin recortar logos o navegación. Las capturas de los demás proyectos siguen pendientes.

Los originales de las fotografías se conservan. No se copian los certificados ni documentos internos a public automáticamente.

## Screenshots a preparar

Guardar primero los originales en `references/project-screenshots/`. Para publicar, seleccionar copias optimizadas en `public/images/projects/` y completar `Project.images` con ruta, alt en los tres idiomas y dimensiones.

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
- Un h1, diez h2, landmarks, skip link, foco visible, alt localizado e iconos decorativos fuera del árbol accesible.
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

Abrir [español](http://localhost:3000/es), [inglés](http://localhost:3000/en) o [alemán](http://localhost:3000/de).

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Verificar idiomas, menú móvil, enlaces, descargas disponibles, tamaños de pantalla y motion reducido. Un idioma no admitido devuelve 404. La documentación profesional interna tampoco debe estar accesible por HTTP.

## Próxima revisión

Revisar esta V1 visual, completar screenshots, seleccionar posibles imágenes de certificados y ajustar composición o dirección visual. Los datos permanecen separados de la presentación para permitir un rediseño.

Dominio de publicación, canonical, Open Graph definitivo, sitemap y despliegue quedan para una etapa posterior autorizada.
