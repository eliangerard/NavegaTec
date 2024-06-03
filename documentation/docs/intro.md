---
sidebar_position: 1
---

# Introducción

Esta es la documentación para el **Frontend de NavegaTec**, información acerca de los componentes de ambas partes de la aplicación.

Esta aplicación fue desarrollada utilizando [React](https://es.react.dev/), [TailwindCSS](https://tailwindcss.com/docs/) y [React Router](https://reactrouter.com/en/main/start/tutorial) para el Frontend y [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/) para el [Backend](https://github.com/eliangerard/navegatec-backend)

### ¿Qué necesitarás?

- [Node.js](https://nodejs.org/en/download/) en su versión 18.0 en adelante.
- [Backend](https://github.com/eliangerard/navegatec-backend) local para desarrollo.

## Instalación

Para poder correr el proyecto en modo de desarrollo es necesario instalar los paquetes del monorepositorio, corriendo el siguiente comando desde la raíz en cualquier terminal:

```bash
npm install
```

## Iniciar la aplicación

Para correr el servidor de desarrollo de la aplicación **administrativa** utiliza:

```bash
cd admin
npm run dev
```

Esto ejecutará la aplicación en http://localhost:5175/

Para correr el servidor de desarrollo de la aplicación **cliente** utiliza:

```bash
cd client
npm run dev
```

Esto ejecutará la aplicación en http://localhost:5176/

**No es necesario ejecutar todos los comandos, solo el que necesites.**