---
sidebar_position: 2
---

# Modelos

Esta aplicación funciona con base a modelos u objetos que se estarán mencionando a lo largo de esta documentación, objetos que son formados dentro de este frontend que en su código no están implementados (recomendable agregar) pero existen del lado del servidor:

## AllowedUser

Objeto para usuarios permitidos para acceder a la aplicación administrativa

```js

const allowedUserSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
});

```

## Event

Objeto que representa un evento

```js

const eventSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    button: {
        type: String,
    },
    link: {
        type: String,
    },
    anchor: {
        type: [Number],
        required: true
    },
    where: {
        type: Object,
        required: true
    },
    when: {
        type: Date,
        default: new Date()
    },
    from: {
        type: Date,
    },
    to: {
        type: Date,
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        required: true
    }
});

```