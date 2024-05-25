import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../../Config/Axios"
import DetallesPedido from "../DetallesPedido/DetallesPedido"
import { NgContext } from "../../Context/NgContext"

const Pedidos = () => {

  const navigate = useNavigate()

  const [pedidos, setPedidos] = useState([])

  //utilizar valores del Context
  const [auth] = useContext(NgContext)

  useEffect(() => {
    if (auth.token !== '') {
      const consultarApi = async () => {
        try {
          //ibtener los pedidos
          const resultado = await clienteAxios.get('/pedidos', {
            headers: {
              Authorization: `Bearer ${auth.token}`
            }
          }
          )
          setPedidos(resultado.data)
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

  }, [navigate, auth])

  /*useEffect(() => {
    // Si el state está como false
    if (!auth.auth) {
      navigate('/login-admin');
    }
  }, [auth.auth, navigate]);*/

  return (
    <>
      <h2 className="m-5">Reporte</h2>

      <ul className="listado-pedidos">
        {pedidos.map(pedido => (
          <DetallesPedido
            key={pedido._id}
            pedido={pedido}
          />
        ))}
      </ul>
    </>
  )
}

export default Pedidos