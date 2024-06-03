# API

Esta herramienta dentro de los helpers se utiliza para hacer llamadas al api de navegatec, es preferible utilizar este método a directamente hacer solicitudes por otras librerías como fetch o axios, ¿Por qué? porque ya incluye la lógica para gestionar la sesión del usuario, si las credenciales vencen este método se encarga de actualizarlas o rechazar sesiones vencidas o alteradas.

```js
const data = await api('events', 'POST', { ...newEvent })
```

## Argumentos
Esta función recibe tres parámetros:
- `url` - Esta es la dirección que se adjunta a la dirección del servidor definida en las variables de entorno.
- `method` - Recibe el método HTTP para realizar la petición.
- `body` - Recibe el *body* a enviar en las peticiones en que aplique.