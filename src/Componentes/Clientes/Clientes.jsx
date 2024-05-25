import { useContext, useEffect, useState } from 'react'
import clienteAxios from '../../Config/Axios'
import { Link, useNavigate } from 'react-router-dom'
import Cliente from '../Cliente/Cliente'
import '../../Pages/Css/inicio.css'
import './Clientes.css'

import { NgContext } from '../../Context/NgContext'



const Clientes = () => {


  const navigate = useNavigate()

  const [clientes, setClientes] = useState([])

  //utilizar valores del Context
  const [auth, setAuth] = useContext(NgContext)

  // Función para cargar el token desde el almacenamiento local al cargar la página
  /*useEffect(() => {
    
  }, [setAuth]);*/



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({
        token,
        auth: true
      });
    }

    if (auth.token !== '') {
      //qeuery a la API obtener todos los clientes
      const consultarApi = async () => {
        try {

          const clienteConsulta = await clienteAxios.get('/clientes', {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          })
          //colocar el resultado de la query al state
          setClientes(clienteConsulta.data)

        } catch (error) {
          if (error.response.status === 500) {
            navigate('/login-admin')


          }
        }
      }
      consultarApi()
    }
    else {
      navigate('/login-admin')


    }
  }, [setAuth, navigate, auth.token])





  return (
    <>
      <div className="clients">

        <h2 className='m-3'>Clientes</h2>

        <Link to={"/admin/clientes/nuevo"} className="btn btn-success nvo-cliente link-clients m-3">
          <i className="fas fa-plus-circle"></i>
          Nuevo Cliente
        </Link>

        <div className="list-product">
          <div className="listproduct-format-main" >
            <p><strong>NOMBRE</strong></p>
            <p><strong>APELLIDOS</strong> </p>
            <p><strong>CODIGO</strong></p>
            <p><strong>CORREO</strong></p>
            <p><strong>TELEFONO</strong></p>
            <p><strong>ACCIONES</strong></p>
          </div >
          <div className="listproduct-allproducts">
            {clientes.map(cliente => (
              <Cliente
                key={cliente._id}
                cliente={cliente}
              />
            ))}
          </div>
        </div >

      </div>
    </>

  )
}

export default Clientes