---
sidebar_position: 1
---

Este componente representa la página de inicio del frontend administrativo, este se encarga de mostrar al usuario el mapa con la información completa y los eventos existentes en la base de datos para su gestión, además de las acciones realizables en la app.
```jsx
export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
```