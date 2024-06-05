---
sidebar_position: 1
---

# Introducción

Esta es la documentación para el **Frontend de NavegaTec**, información acerca de los componentes de ambas partes de la aplicación.

Esta aplicación fue desarrollada utilizando [React](https://es.react.dev/), [TailwindCSS](https://tailwindcss.com/docs/) y [React Router](https://reactrouter.com/en/main/start/tutorial) para el Frontend y [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/) para el [Backend](https://github.com/eliangerard/navegatec-backend)

### ¿Qué necesitarás?
Puedes utilizar docker para ejecutar el entorno de desarrollo, así no tienes que instalar nada más.
- [Docker](https://www.docker.com/)

Aún así, el entorno también está preparado para una ejecución cómoda con node.
- [Node.js](https://nodejs.org/en/download/) en su versión 18.0 en adelante.
- [Backend](https://github.com/eliangerard/navegatec-backend) local para desarrollo.

## Instalación

Para poder correr el proyecto en modo de desarrollo es necesario instalar los paquetes del monorepositorio, corriendo el siguiente comando desde la raíz en cualquier terminal:

```bash
npm install
```

## Iniciar la aplicación

Utiliza una terminal en la raíz de todo el monorepositorio y ejecuta el siguiente comando:
```bash
# Con docker
docker compose up --build

# Con NPM
npm run dev
```

Esto iniciará todos los proyectos dentro del mismo, la parte [administrativa](http://localhost:5175/), la [pública](http://localhost:5176/) y la [documentación](http://localhost:4444/).

---

Si quieres ejecutar cada proyecto individualmente:

- Para correr el servidor de desarrollo de la aplicación **administrativa** utiliza:
```bash
cd admin
npm run dev

# Esto ejecutará la aplicación en http://localhost:5175/
```

- Para correr el servidor de desarrollo de la aplicación **cliente** utiliza:

```bash
cd client
npm run dev

# Esto ejecutará la aplicación en http://localhost:5176/
```

- Para correr el servidor de desarrollo de la **documentación** utiliza:

```bash
cd documentation
npm run start

# Esto ejecutará la aplicación en http://localhost:4444/
```


**No es necesario ejecutar todos los comandos, solo el que necesites.**