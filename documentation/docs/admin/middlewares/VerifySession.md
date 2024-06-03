Este middleware envuelve todas las rutas que requieren de protección o de una sesión activa, su trabajo es verificar que la sesión no haya vencido mientras se va utilizando la aplicación.

```jsx
function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path='/redirect/*' element={<Redirect />} />
                    <Route path='/*' element={<VerifySession />} />
                </Routes>
            </UserProvider>
        </BrowserRouter >
    )
}
```
Si se agregarán más rutas o se busca cambiar el comportamiento de las sesiónes, se debe comenzar por este componente.