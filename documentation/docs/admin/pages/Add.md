---
sidebar_position: 4
---

Este componente representa la página para añadir eventos, la cual envuelve a los otros componentes [InitializeEvent](/docs/admin/components/InitializeEvent) y [FillEvent](/docs/admin/components/FillEvent) para concretar el proceso de creación de un evento.
```jsx
<Route path="/add" element={
        <Add 
            events={events} 
            setEvents={setEvents} 
        />
    }
/>
```

## Props
- `events` - Los eventos actuales en la aplicación para ser mostrados en los mapas de fondo.
- `setEvents` - Función para alterar la variable de estado que guarda los eventos con el propósito de agregar uno nuevo.
