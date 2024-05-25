import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import clienteAxios from "../../Config/Axios"
import Producto from "../producto/Producto"
import './Productos.css'
import { NgContext } from "../../Context/NgContext"



const Productos = () => {

  const navigate = useNavigate()

  //setProductos es la funcion para guardar
  const [productos, setProductos] = useState([])

  //utilizar valores del Context
  const [auth] = useContext(NgContext)


  //cargar los productos en la pagina
  useEffect(() => {
    if (auth.token !== '') {


      //query a la API REST
      const consultarApi = async () => {
        try {

          const consultarProductos = await clienteAxios.get('/productos', {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          }
          )
          setProductos(consultarProductos.data)

        } catch (error) {
          if (error.response.status === 500) {
            navigate('/login-admin')

          }
        }

      }
      consultarApi()
    } else
      navigate('/login-admin')

  }, [auth.token, navigate])

  // Redireccionar si el usuario no está autenticado
  /*useEffect(() => {
    if (!auth.auth) {
      navigate('/login-admin');
    }
  }, [auth.auth, navigate]);*/

  return (
    <>
      <div className="products">

        <h2 className="m-3">Productos</h2>

        <Link to={'/admin/productos/nuevo'} className="btn btn-success nvo-cliente link-products m-3">
          <i className="fas fa-plus-circle mr-3"> </i>
          Nuevo Producto
        </Link>
        <div className="list-product-prod">
          <div className="listproduct-format-main-prod" >
            <p>PRODUCTO</p>
            <p>NOMBRE</p>
            <p>PPV</p>
            <p>SV</p>
            <p>PRECIO</p>
            <p>ACCIONES</p>
          </div>
          <div className="listproduct-allproducts-prod">
            {productos.map(producto => (
              <Producto
                key={producto._id}
                producto={producto}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Productos 