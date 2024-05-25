

const FromCantidadProducto = (props) => {

  const { producto, restarProductos, aumentarProductos, eliminarProductoPedido, index } = props

  return (
    <li className="cant-pro-centrar">
      <div className="texto-producto">
        <p className="nombre">{producto.nombre}</p>
        <p className="precio">$ {producto.precio}</p>
      </div>
      <div className="acciones">
        <div className="contenedor-cantidad">
          <i
            className="fas fa-minus"
            onClick={() => restarProductos(index)}
          ></i>

          <p>{producto.cantidad}</p>

          <i
            className="fas fa-plus"
            onClick={() => aumentarProductos(index)}
          ></i>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProductoPedido(producto._id)}
        >
          <i className="fas fa-minus-circle"></i>
          Eliminar Producto
        </button>
      </div>
    </li>
  )
}

export default FromCantidadProducto