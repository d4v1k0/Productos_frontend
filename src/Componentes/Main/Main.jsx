import { useContext } from "react"
import { Routes, Route } from "react-router-dom"

import Clientes from "../Clientes/Clientes"
import NuevoCliente from "../NuevoCliente/NuevoCliente"
import EditarCliente from "../EditarCliente/EditarCliente"

import Productos from "../Productos/Productos"
import NuevoProducto from "../NuevoProducto/NuevoProducto"
import EditarProducto from "../EditarProducto/EditarProducto"

import Pedidos from "../Pedidos/Pedidos"
import NuevoPedido from "../NuevoPedido/NuevoPedido"



import { NgContext } from "../../Context/NgContext"
import Sidebar from "../Sidebar/Sidebar"
import './Main.css'


const Main = () => {

  const [auth] = useContext(NgContext)



  return (

    <>

      <div className='main'>


        {auth.auth ? <Sidebar /> : null}
        <Routes>

          <Route path='/' element={<Clientes />} />
          <Route path="/clientes/nuevo" element={<NuevoCliente />} />
          <Route path='/clientes/editar/:id' element={<EditarCliente />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/nuevo' element={<NuevoProducto />} />
          <Route path='/productos/editar/:id' element={<EditarProducto />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/pedidos/nuevo/:id' element={<NuevoPedido />} />


        </Routes>

      </div>
    </>
  )
}

export default Main