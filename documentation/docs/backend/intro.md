---
sidebar_position: 1
---

# Introducción

Esta es la documentación para el **Backend de NavegaTec**, información acerca de las rutas y la estructura del proyecto.

Esta aplicación fue desarrollada utilizando [Node.js](https://nodejs.org/en) y su framework [Express](https://expressjs.com/).

### ¿Qué necesitarás?
Puedes utilizar docker para ejecutar el entorno de desarrollo, así no tienes que instalar nada más.
- [Docker](https://www.docker.com/)

Aún así, el entorno también está preparado para una ejecución cómoda con node.
- [Node.js](https://nodejs.org/en/download/) en su versión 18.0 en adelante.

## Instalación
:::info
**NO** es necesario realizar este paso si utilizarás Docker para la ejecución del entorno.
:::
Para poder correr el proyecto en modo de desarrollo es necesario instalar los paquetes corriendo el siguiente comando desde la raíz en cualquier terminal:

```bash
npm install
```

## Iniciar la aplicación

Para correr el servidor de desarrollo de la aplicación **administrativa** utiliza:

```bash
# Con Docker
docker compose up --build

# Con node
npm run dev
```