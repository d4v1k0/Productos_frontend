import { useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../../Config/Axios"

const NuevoProducto = () => {

  const navigate = useNavigate()

  const [producto, setProducto] = useState({
    nombre: '',
    ppv: '',
    sv: '',
    precio: ''
  })

  const [archivo, setArchivo] = useState('')

  const agregarProducto = async e => {
    e.preventDefault()
    //crear un formData
    const formData = new FormData()
    formData.append('nombre', producto.nombre)
    formData.append('ppv', producto.ppv)
    formData.append('sv', producto.sv)
    formData.append('precio', producto.precio)
    formData.append('imagen', archivo)
    //almacenar en la DB
    try {
      const res = await clienteAxios.post('/productos', formData, {
        headers: {
          'Content-Types': 'multipart/form-data'
        }
      })
      //alert
      if (res.status === 200) {
        Swal.fire(
          'Agregado correctamente!'
        )
      }
      //redirecciona
      navigate('/Admin/productos')
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

  //validar el formulario
  const validarProducto = () => {
    //desestructurando
    const { nombre, ppv, sv, precio } = producto
    //revisar que el state tenga contenido
    let valido = !nombre.length || !ppv.length || !sv.length || !precio.length  //retorna true o false
    return valido
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">Nuevo Producto</h2>

      <form onSubmit={agregarProducto}>
        <fieldset>
          <legend className="mb-4">Llena todos los campos</legend>

          <div className="form-group mb-3">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Producto"
              name="nombre"
              style={{ fontSize: '1.25rem' }}
              onChange={leerInformacionProducto}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="ppv">PPV:</label>
            <input
              type="number"
              className="form-control"
              name="ppv"
              placeholder="PPV"
              style={{ fontSize: '1.25rem' }}
              onChange={leerInformacionProducto}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="sv">SV:</label>
            <input
              type="number"
              className="form-control"
              name="sv"
              min="0.00"
              step="0.01"
              placeholder="SV"
              style={{ fontSize: '1.25rem' }}
              onChange={leerInformacionProducto}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              className="form-control"
              name="precio"
              min="0.00"
              step="0.01"
              placeholder="Precio"
              style={{ fontSize: '1.25rem' }}
              onChange={leerInformacionProducto}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="imagen">Imagen:</label>
            <input
              type="file"
              className="form-control-file"
              name="imagen"
              style={{ fontSize: '1.25rem' }}
              onChange={leerArchivo}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={validarProducto()}
          >
            Agregar Producto
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default NuevoProducto