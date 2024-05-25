import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import FormBuscarProducto from '../BuscarProducto/FormBuscarProducto'
import FormCantidadProducto from "../FormCantidadProducto/FromCantidadProducto"
import clienteAxios from "../../Config/Axios"
import Swal from "sweetalert2"

import './NuevoPedido.css'

const NuevoPedido = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [cliente, setCliente] = useState({})

  const [busqueda, setBusqueda] = useState('')

  const [productos, setProductos] = useState([])

  const [total, setTotal] = useState(0)

  //state de ppv
  const [ppv, setPpv] = useState(0)


  // Obtenemos la fecha actual
  const fechaActual = new Date();
  // Obtenemos el día, el mes y el año
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, sumamos 1 para obtener el número de mes correcto
  const año = fechaActual.getFullYear();
  // Formateamos la fecha como "dd/mm/yyyy"
  const fechaFormateada = `${(dia)}/${(mes)}/${año}`;

  useEffect(() => {
    //Ibtener cliente
    const consultarApi = async () => {
      //consultar el cliente
      const resultado = await clienteAxios.get(`/clientes/${id}`)
      console.log(resultado.data)
      setCliente(resultado.data)
    }

    consultarApi()

    //actualizar el total
    actualizarTotal()

  }, [id, productos])

  const buscarProducto = async e => {
    e.preventDefault()
    //obtener los productos
    const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`)
    //si no hay resultados
    if (resultadoBusqueda.data[0]) {
      let productoResultado = resultadoBusqueda.data[0]

      productoResultado.producto = resultadoBusqueda.data[0]._id
      productoResultado.cantidad = 0

      //poner al state
      setProductos([...productos, productoResultado])
    } else {
      //no hay resultados
      Swal.fire('error, no hay resultados.')
    }
  }

  const leerDatosBusqueda = e => {
    setBusqueda(e.target.value)

  }

  // actualizar la cantidad de productos
  const restarProductos = i => {

    /// copiar el arreglo original de productos
    const todosProductos = [...productos];

    // validar si esta en 0 no puede ir mas alla
    if (todosProductos[i].cantidad === 0) return;

    // decremento
    todosProductos[i].cantidad--;

    // almacenarlo en el state
    setProductos(todosProductos);

    //actualizar el total
    //actualizarTotal()

  }

  const aumentarProductos = i => {


    // copiar el arreglo para no mutar el original
    const todosProductos = [...productos];

    // incremento
    todosProductos[i].cantidad++;

    // almacenarlo en el state
    setProductos(todosProductos);

    //actualizar el total
    //actualizarTotal()
  }

  //elimina un producto de state
  const eliminarProductoPedido = id => {
    const todosProductos = productos.filter(producto => producto.producto !== id)
    setProductos(todosProductos)
  }

  //Actualizar el total
  const actualizarTotal = () => {
    // Si el total es 0
    if (productos.length === 0) {
      setTotal(0)
      return
    }
    //calcular total
    let nuevoTotal = 0
    //calcular PPv
    let nuevoPpv = 0
    //recorrer los productos
    productos.map(producto => nuevoTotal += (producto.cantidad * producto.precio))
    //recorre los priducto para sumar los ppv
    productos.map(producto => nuevoPpv += (producto.cantidad * producto.ppv))
    //almacenar el total
    setTotal(nuevoTotal)
    //almacena el totoal de PPV
    setPpv(nuevoPpv)

  }

  //almacena el pedido en la base de datos
  const realizarPedido = async e => {
    e.preventDefault()
    //extraer el ID

    //Objeto
    const pedido = {
      "cliente": id,
      "pedido": productos,
      "total": total
    }
    //almacenar en la base de datos
    const resultado = await clienteAxios.post(`/pedidos/nuevo/${id}`, pedido)
    //leer resultado
    if (resultado.status === 200) {
      Swal.fire(resultado.data.mensaje)
    } else {
      Swal.fire('ocurrio un error!')
    }
    //redireccion a pedidos
    navigate('/admin/pedidos')
  }

  return (

    <div className="container">

      <h2 className="m-5">Nuevo Pedido</h2>

      <div className="fichaCliente">
        <table className="table bg-white">
          <tbody>
            <tr>
              <td>Código:</td>
              <td>{cliente.codigo}</td>
            </tr>
            <tr>
              <td>Nombre:</td>
              <td>{cliente.nombre} {cliente.apellido}</td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>{cliente.telefono}</td>
            </tr>
            <tr>
              <td>Fecha:</td>
              <td>{fechaFormateada}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <FormBuscarProducto buscarProducto={buscarProducto} leerDatosBusqueda={leerDatosBusqueda} />

      <ul className="resumen">
        {productos.map((producto, index) => (
          <FormCantidadProducto
            key={producto.producto}
            producto={producto}
            restarProductos={restarProductos}
            aumentarProductos={aumentarProductos}
            eliminarProductoPedido={eliminarProductoPedido}
            index={index}
          />
        ))}

      </ul>


      <p className="total">Total PPV: <span>$ {ppv.toFixed(2)}</span> </p>
      <p className="total">Total a Pagar: <span>$ {total}</span> </p>


      {total > 0 ? (
        <form
          onSubmit={realizarPedido}
        >
          <input type="submit"
            className="btn btn-success btn-block w-100 " style={{ fontSize: '1.6rem' }}
            value="Realizar Pedido" />
        </form>
      ) : null}
    </div>

  )
}

export default NuevoPedido