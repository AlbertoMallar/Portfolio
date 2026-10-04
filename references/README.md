# Referencias y recursos de trabajo

Esta carpeta reúne material que se agregará manualmente para construir el portfolio de forma incremental. No se sirve desde el sitio: los recursos seleccionados y preparados para publicar se incorporarán más adelante a `public/`.

| Carpeta | Qué colocar aquí |
| --- | --- |
| `design-examples/` | Screenshots de portfolios, sitios, secciones, layouts, animaciones o estilos visuales que sirvan de referencia. |
| `my-images/` | Fotografías personales que podrían aparecer en el portfolio. |
| `project-screenshots/icasa/` | Capturas del proyecto ICASA. |
| `project-screenshots/viansa/` | Capturas del proyecto VIANSA. |
| `project-screenshots/ai-engineering/` | Capturas de proyectos de AI Engineering, RAG y sistemas multiagente. Se pueden agregar subcarpetas por proyecto cuando haga falta. |
| `branding/` | Logos, iconos, imágenes y otros recursos relacionados con la identidad personal. |
| `professional-info/cv/` | CV y documentación profesional para verificar el contenido. |
| `professional-info/linkedin/` | Material de LinkedIn que se agregue posteriormente. |
| `professional-info/github/` | Material de GitHub y proyectos que se agregue posteriormente. |

## Cómo usar las referencias

Agregar una imagen no implica copiar su diseño completo. Antes de implementar, analizaremos qué elemento concreto interesa de cada referencia: composición, tipografía, navegación, espaciado, tratamiento de imágenes, interacción u otro detalle.

Para facilitar el análisis, conviene usar nombres descriptivos y, si hace falta, agregar una nota `.md` junto a la imagen indicando su origen y qué elemento interesa rescatar. Esta nota es opcional.

Las carpetas vacías incluyen `.gitkeep` para poder conservarlas en Git. Los archivos de referencia no están ignorados por `.gitignore`; se pueden versionar al incorporarlos al repositorio.

## Pasar un recurso al sitio

Una imagen agregada aquí no se incorpora automáticamente al portfolio. Cuando decidamos utilizarla, la copiaremos o moveremos al lugar correspondiente:

- Fotografías personales: `public/images/profile/`.
- Capturas de proyectos: `public/images/projects/`.
- Logos y recursos de identidad: `public/images/branding/`.
- Iconos seleccionados: `public/icons/`.

Las referencias de diseño permanecen como material de análisis. Los CV reales se colocan directamente en `public/cv/`, con los nombres indicados en el README principal.

`professional-info/` también es material de trabajo: el CV fuente no se publica automáticamente. Su README documenta los datos incorporados y la información todavía pendiente.
