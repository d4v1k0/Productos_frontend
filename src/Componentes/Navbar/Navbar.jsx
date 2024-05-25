import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.ico'
import { NgContext } from '../../Context/NgContext';


const Navbar = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(NgContext);


  // Función para cargar el token desde el almacenamiento local al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({
        token,
        auth: true
      });
    }
  }, [setAuth]);

  const cerrarSesion = () => {
    // auth.auth = false y el token se remueve
    setAuth({
      token: '',
      auth: false
    });

    localStorage.setItem('token', '');

    // redireccionar
    navigate('/login-admin');
  }



  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>
      <div className="container">
        <Link to='/' className='navbar-brand'><img src={logo} alt="logo" /></Link>
        <h1 className='navbar-text text-white'>CENTRO DE SERVICIO N.G.</h1>

        <div className="ml-auto">
          {auth.auth ? (
            <button
              type="button"
              className="btn btn-danger d-flex align-items-center w-100"
              onClick={cerrarSesion}
            >
              <i className="far fa-times-circle mr-2"></i>
              Cerrar Sesión
            </button>
          ) : null}



        </div>

      </div>
    </header>
  )
}

export default Navbar