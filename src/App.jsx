import { useContext } from 'react'

import './App.css'
import Admin from './Componentes/Admin/Admin'
import Inicio from './Pages/Inicio'
import { Routes, Route } from 'react-router-dom'


import { NgContext, NgProvider } from './Context/NgContext'
import Registro from './Pages/Registro'
import IniciarSesion from './Pages/IniciarSesion'
import InforProductos from './Pages/InforProductos'
import Login from './Componentes/auth/Login'



function App() {


  // utilizar context
  const [auth, setAuth] = useContext(NgContext);

  return (
    <>
      <NgProvider value={[auth, setAuth]}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/registrar' element={<Registro />} />
          <Route path='/iniciar-sesion' element={<IniciarSesion />} />
          <Route path='/infor-productos' element={<InforProductos />} />
          <Route path='/login-admin' element={<Login />} />
        </Routes>
      </NgProvider>
    </>
  )
}

export default App
