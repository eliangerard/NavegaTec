---
sidebar_position: 2
---

# Estructura

Este proyecto se divide en varios directorios con el fin de agilizar el desarrollo:

- `/public` - Archivos que servirá el servidor.
- `/src` - Código del proyecto.
  - `/controllers` - Aquí va el código con la lógica de negocios, el código que cada ruta ejecuta al ser solicitada.
  - `/middlewares` - En este directorio están los middlewares, código que se ejecuta en cada solicitud que lo especifique antes de proceder a ejecutar el código de los controladores.
  - `/models` - Directorio para los modelos/objetos que maneja la base de datos.
  - `/routes` - Código que define las rutas y qué controladores ejecutan.
  - `/services` - Directorio para agregar cualquier servicio externo, aún no utilizado.