---
sidebar_position: 2
---

Este componente representa la página de inicio de sesión, la cual se encarga de redirigir al usuario a la página del proveedor para que complete su sesión.
```jsx
export const Main = () => {
    const { user } = useContext(UserContext);
    return (
        <Routes>
            <Route path="/" element={user.logged ? <Home/> : <Login/>}/>
        </Routes>
    )
}
```