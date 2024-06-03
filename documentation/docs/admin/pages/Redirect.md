---
sidebar_position: 3
---

Este componente es al que el usuario es redirigido después del inicio de sesión, se encarga de recibir el código enviado por el proveedor para intercambiarlo por las credenciales o *tokens* y terminar de crear la sesión, es aquí cuando se da la verificación de si el usuario que intenta iniciar sesión es parte de los usuarios de acceso permitido en la *whitelist*.
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

## Search Params

- `code` - El código enviado por el proveedor a través de la url