import { Link } from 'react-router-dom'
import './SideBar.css'


const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <h2>Administración</h2>
        <div className="sidebar-item">
          <Link to={"/admin/"} className="link-sidebar"><i className="fa-regular fa-user"></i> Clientes</Link>
        </div>
        <div className="sidebar-item">
          <Link to={"/admin/productos"} className="link-sidebar"><i className="fa-solid fa-shop"></i> Productos</Link>
        </div>
        <div className="sidebar-item">
          <Link to={"/admin/pedidos"} className="link-sidebar"><i className="fa-solid fa-bag-shopping"></i> Reportes y Pedidos</Link>
        </div>




      </div>
    </>
  )
}

export default Sidebar