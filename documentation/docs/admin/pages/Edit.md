---
sidebar_position: 5
---

Este componente representa la página de edición en la cual un evento puede ser editado, este envuelve el componente de [FillEvent](/docs/admin/components/FillEvent) y le proporciona la información del evento existente.

```jsx
<Route path="/edit/:id" element={<Edit/>}/>
```

## Params
- `id` - El id del evento que será editado.