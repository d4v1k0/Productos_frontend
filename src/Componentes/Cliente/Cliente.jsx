import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import clienteAxios from "../../Config/Axios"


const Cliente = (props) => {

  const { _id, nombre, apellido, codigo, email, telefono } = props.cliente;

  const eliminarCliente = id => {
    Swal.fire({
      title: "Eliminar el Cliente?",
      text: "Estas seguro de eliminar el Cliente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        // id es del cliente
        clienteAxios.delete(`/clientes/${id}`)
          .then(res => {
            Swal.fire({
              title: "Eliminado!",
              text: res.data.mensaje,
              icon: "success"
            });
          })
        window.location.reload()
      }

    });
  }
  return (
    <>
      <hr />
      <div className='listproduct-format-main'>
        <p>{nombre}</p>
        <p>{apellido}</p>
        <p>{codigo}</p>
        <p>{email}</p>
        <p>{telefono}</p>
        <div className="listproduct-remove-icon">
          <Link to={`/admin/clientes/editar/${_id}`} >
            <button title="Editar Cliente">
              <i className="fas fa-pen-alt" />
            </button>
          </Link>
          <Link to={`/admin/pedidos/nuevo/${_id}`} >
            <button title="Crear un Pedido">
              <i className="fa-solid fa-file-lines" />
            </button>
          </Link>
          <button title="Borrar Cliente"
            onClick={() => eliminarCliente(_id)}
          >
            <i className="fa-solid fa-trash" />
          </button>

        </div>
      </div>
    </>
  )
}

export default Cliente