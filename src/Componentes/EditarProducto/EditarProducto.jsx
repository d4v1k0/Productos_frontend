import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import clienteAxios from "../../Config/Axios"

const EditarProducto = () => {

  const navigate = useNavigate()
  //Obtener el ID
  const { id } = useParams()


  //state pra actualizar
  const [producto, setProducto] = useState({
    nombre: '',
    ppv: '',
    sv: '',
    precio: ''
  })

  const [archivo, setArchivo] = useState('')

  //cuando carga el componente
  useEffect(() => {
    const consultarApi = async () => {
      const consultaProducto = await clienteAxios.get(`/productos/${id}`)

      setProducto(consultaProducto.data)
    }
    consultarApi()

  }, [id])

  // editat producto
  // Edita un Producto en la base de datos
  const editarProducto = async e => {
    e.preventDefault();

    //crear un formData
    const formData = new FormData()
    formData.append('nombre', producto.nombre)
    formData.append('ppv', producto.ppv)
    formData.append('sv', producto.sv)
    formData.append('precio', producto.precio)
    formData.append('imagen', archivo)
    //almacenar en la DB
    try {
      const res = await clienteAxios.put(`/productos/${id}`, formData, {
        headers: {
          'Content-Types': 'multipart/form-data'
        }
      })
      //alert
      if (res.status === 200) {
        Swal.fire(
          'Editado correctamente!'
        )
      }
      //redirecciona
      navigate('/admin/productos')
    } catch (error) {
      console.log(error)
      //alerta
      Swal.fire({
        title: "Eliminado!",
        text: "Vuelva a intentarlo",
        icon: "success"
      });
    }
  }

  const leerInformacionProducto = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const leerArchivo = e => {

    setArchivo(e.target.files[0])
  }

  const { nombre, ppv, sv, precio, imagen } = producto

  return (
    <>
      <h2 className="m-5">Editar Producto</h2>

      <form onSubmit={editarProducto}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Producto"
            name="nombre"
            onChange={leerInformacionProducto}
            value={nombre}
          />
        </div>

        <div className="campo">
          <label>Ppv:</label>
          <input
            type="number"
            name="ppv"
            min="0.00"
            step="0.01"
            placeholder="ppv"
            onChange={leerInformacionProducto}
            value={ppv}
          />
        </div>
        <div className="campo">
          <label>Sv:</label>
          <input
            type="number"
            name="sv"
            min="0.00"
            step="0.01"
            placeholder="sv"
            onChange={leerInformacionProducto}
            value={sv}
          />
        </div>

        <div className="campo">
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            min="0.00"
            step="0.01"
            placeholder="Precio"
            onChange={leerInformacionProducto}
            value={precio}
          />
        </div>


        <div className="campo">
          <label>Imagen:</label>
          {imagen ? (
            <img src={`${import.meta.env.VITE_BACKEND_URL}/${imagen}`} alt="imagen" width="100" />
          ) : null}
          <input
            type="file"
            name="imagen"
            onChange={leerArchivo}
          />
        </div>

        <div className="enviar">
          <input type="submit" className="btn btn-primary" value="Editar Producto" />
        </div>
      </form>
    </>
  )
}

export default EditarProducto