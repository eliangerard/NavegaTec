---
sidebar_position: 1
---

# Estructura

El proyecto se estructura en carpetas con distintos propósitos:

- `/public` - Todos los archivos estáticos que el servidor puede servir.
- `/src` - Todos los archivos funcionales o código, desde ahora mencionada como **carpeta principal**.

## Carpeta principal

El directorio `/src` a su vez se descompone en más carpetas con el propósito de mejorar la organización y establecer una pauta para futuros componentes:

- `/assets` - Recursos utilizables por el código que no serán servidos públicamente.
- `/components` - Componentes utilizados dentro de las `pages` del proyecto que pueden ser reutilizados
- `/context` - Archivos de contexto de React.
- `/helpers` - Funciones de JavaScript puro que sirven a modo de herramientas.
- `/middlewares` - Componentes de React que cumplen la función de verificadores intermediarios.
- `/pages` - Componentes que representan distintas páginas del sitio.