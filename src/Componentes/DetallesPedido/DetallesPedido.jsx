import Swal from "sweetalert2";
import clienteAxios from "../../Config/Axios";
import './DetallePedido.css';
import { useNavigate } from "react-router-dom";

const DetallesPedido = (props) => {

  const navigate = useNavigate()

  const { pedido } = props;

  // Verificar si `pedido` existe y tiene las propiedades necesarias
  if (!pedido || !pedido.cliente || !pedido.pedido) {
    return <p>Pedido no disponible</p>;
  }

  const { cliente, total, _id } = pedido;

  // Eliminar pedido
  const eliminarPedido = id => {
    Swal.fire({
      title: "Eliminar Pedido?",
      text: "Estas seguro de eliminar el Pedido",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        // id es del cliente
        clienteAxios.delete(`/pedidos/${id}`)
          .then(res => {
            Swal.fire({
              title: "Eliminado!",
              text: res.data.mensaje,
              icon: "success"
            });
          })
          .catch(err => {
            Swal.fire({
              title: "Error!",
              text: "No se pudo eliminar el pedido",
              icon: "error"
            });
          });

        navigate('/admin/')
      }
    });
  }

  return (
    <li className="pedido">
      <div className="info-pedido">
        <p className="id id-pedido">ID Pedido: {_id}</p>
        <p className="nombre">Cliente: {cliente?.nombre || 'Nombre no disponible'} {cliente?.apellido || 'Apellido no disponible'}</p>

        <div className="articulos-pedido bg-white">
          <p className="productos">Artículos Pedido: </p>

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ppv</th>
                <th>Sv</th>
                <th>Precio Bs</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {pedido.pedido.map((articulo, index) => (
                <tr key={`${_id}-${articulo.producto?._id}-${index}`}>
                  <td>{articulo.producto?.nombre || 'Nombre no disponible'}</td>
                  <td>{articulo.producto?.ppv || 'N/A'}</td>
                  <td>{articulo.producto?.sv || 'N/A'}</td>
                  <td>{articulo.producto?.precio || 'N/A'}</td>
                  <td>{articulo.cantidad || 'N/A'}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{pedido.pedido.reduce((total, articulo) => total + (articulo.producto?.ppv * articulo.cantidad), 0).toFixed(2)}</strong></td>
                <td><strong>{pedido.pedido.reduce((total, articulo) => total + (articulo.producto?.sv * articulo.cantidad), 0)}</strong></td>
                <td><strong>Bs. {pedido.pedido.reduce((total, articulo) => total + (articulo.producto?.precio * articulo.cantidad), 0)}</strong></td>
                <td><strong>{pedido.pedido.reduce((total, articulo) => total + articulo.cantidad, 0)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="total">Total: Bs. {total}</p>
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-danger btn-eliminar"
          onClick={() => eliminarPedido(_id)}>
          <i className="fas fa-times"></i>
          Eliminar Pedido
        </button>
      </div>
    </li>
  );
}

export default DetallesPedido;
