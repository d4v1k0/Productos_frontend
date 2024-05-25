
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import clienteAxios from '../../Config/Axios'


const Producto = (props) => {

  const navigate = useNavigate()

  const { _id, nombre, ppv, sv, precio, imagen } = props.producto
  //eliminar producto
  const eliminarProducto = id => {
    Swal.fire({
      title: "Eliminar Producto?",
      text: "Estas seguro de elimnar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        //elimar de la API REST
        clienteAxios.delete(`/productos/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: "Eliminado!",
                text: "El producto ha sido elimnado.",
                icon: "success"
              });
            }
          })
        navigate('/admin/')
      }
    });

  }



  return (
    <>
      <hr />
      <div className='listproduct-format-main-prod'>
        <img width={100} src={`${import.meta.env.VITE_BACKEND_URL}/${imagen}`} alt="" />
        <p>{nombre} </p>
        <p>{ppv} </p>
        <p>{sv} </p>
        <p>{precio} </p>
        <div className="listproduct-remove-icon-prod">
          <Link to={`/admin/productos/editar/${_id}`} >
            <button>
              <i className="fas fa-pen-alt"></i>
            </button>
          </Link>

          <button
            type="button"
            onClick={() => eliminarProducto(_id)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </>
  )

}

export default Producto