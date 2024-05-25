import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import clienteAxios from "../../Config/Axios"
import Swal from 'sweetalert2'

const EditarCliente = () => {
  //obtener ID
  const { id } = useParams()

  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    codigo: '',
    email: '',
    telefono: ''
  })

  //useEffect para cargar el componente
  useEffect(() => {
    //query a la API REST
    const consultarApi = async () => {
      const clienteConsulta = await clienteAxios.get(`/clientes/${id}`)
      //poner en el state
      setCliente(clienteConsulta.data)

    }
    consultarApi()

  }, [id])


  //leer datos del formulario
  const actualizarState = e => {
    //almacenar la escritura del usuario
    setCliente({
      //copia del state
      ...cliente,
      [e.target.name]: e.target.value
    })

  }

  //Enviar una peticion por axios para actualizar cliente
  const actualizarCliente = e => {
    e.preventDefault()
    //peticion por axios
    clienteAxios.put(`/clientes/${cliente._id}`, cliente)
      .then(res => {
        //validar los errores
        if (res.data.code === 11000) {
          Swal.fire({
            title: "error",
            text: 'el correo ya esta registrado',
            icon: "error"
          })
        } else {
          Swal.fire({
            title: "Correcto",
            text: 'Se actualizo el Cliente.',
            icon: "success"
          })
        }
        navigate('/admin/')
      })
  }

  //validar el formulario
  const validarCliente = () => {
    //desestructurando
    const { nombre, apellido, email, codigo, telefono } = cliente
    //revisar que el state tenga contenido
    let valido = !nombre.length || !apellido.length || !email.length || !codigo.length || !telefono.length
    //retorna true o false
    return valido
  }

  return (
    <>
      <h2 className="m-5">Editar Cliente</h2>

      <form onSubmit={actualizarCliente}>
        <legend>Llena todos los campos</legend>
        <div className="campo">
          <label>Nombre:</label>
          <input type="text"
            placeholder="Nombre Cliente"
            name="nombre"
            onChange={actualizarState}
            value={cliente.nombre}
          />
        </div>

        <div className="campo">
          <label>Apellidos:</label>
          <input type="text"
            placeholder="Apellido Cliente"
            name="apellido"
            onChange={actualizarState}
            value={cliente.apellido}
          />
        </div>

        <div className="campo">
          <label>Código:</label>
          <input type="text"
            placeholder="Código Cliente"
            name="codigo"
            onChange={actualizarState}
            value={cliente.codigo}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={actualizarState}
            value={cliente.email}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input type="tel"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={actualizarState}
            value={cliente.telefono}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-primary"
            value="Guardar Cliente"
            disabled={validarCliente()}
          />
        </div>
      </form>
    </>
  )
}

export default EditarCliente