import { useState } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../../Config/Axios"
import Swal from 'sweetalert2'


const NuevoCliente = () => {

  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    codigo: '',
    email: '',
    telefono: ''
  })

  //leer datos del formulario
  const actualizarState = e => {
    //almacenar la escritura del usuario
    setCliente({
      //copia del state
      ...cliente,
      [e.target.name]: e.target.value
    })

  }

  //añade un cliente nuevo a la API REST
  const agregarCliente = e => {
    e.preventDefault()
    //envia la peticion
    clienteAxios.post('/clientes', cliente)
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
            text: res.data.mensaje,
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
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4">Nuevo Cliente</h2>

            <form onSubmit={agregarCliente}>
              <fieldset>
                <legend className="mb-4">Llena todos los campos</legend>
                <div className="form-group mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={actualizarState}
                    style={{ fontSize: '1.25rem' }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Apellidos"
                    name="apellido"
                    onChange={actualizarState}
                    style={{ fontSize: '1.25rem' }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="codigo" className="form-label">Código:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Código"
                    name="codigo"
                    onChange={actualizarState}
                    style={{ fontSize: '1.25rem' }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    onChange={actualizarState}
                    style={{ fontSize: '1.25rem' }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Teléfono"
                    name="telefono"
                    onChange={actualizarState}
                    style={{ fontSize: '1.25rem' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mt-5"
                  disabled={validarCliente()}
                >
                  Agregar Cliente
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NuevoCliente