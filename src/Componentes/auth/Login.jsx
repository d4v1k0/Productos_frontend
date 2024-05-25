import { useState, useContext, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../../Config/Axios";
import { NgContext } from "../../Context/NgContext";

import './Login.css'

const Login = () => {

  const navigate = useNavigate()

  // Auth y token
  const [auth, setAuth] = useContext(NgContext)



  // State con los datos del formulario
  const [credenciales, guardarCredenciales] = useState({});


  useEffect(() => {
    if (auth.token !== '') {
      navigate('/admin/')
    }

  }, [navigate, auth])


  //iniciar sesión en el servidor
  const iniciarSesion = async e => {
    e.preventDefault();

    // autenticar al usuario

    try {
      const respuesta = await clienteAxios.post('/iniciar-sesion', credenciales);

      // extraer el token y colocarlo en localstorage
      const { token } = respuesta.data;

      localStorage.setItem('token', token);

      // colocarlo en el state
      setAuth({
        token,
        auth: true
      })

      // alerta
      Swal.fire(
        'Login Correcto',
        'Has iniciado Sesión',
        'success'
      )

      // redireccionar
      navigate('/admin/')


    } catch (error) {
      console.log(error);
      Swal.fire('acurrio un error', error.response.data.mensaje)
    }
  }

  // almacenar lo que el usuario escribe en el state
  const leerDatos = e => {
    guardarCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="body-admin d-flex">

      <div className="container mt-5">
        <h2 className="text-center mb-4">Administración</h2>

        <div className="card mx-auto bg-dark text-white" style={{ maxWidth: '400px' }}>

          <div className="card-body">
            <form
              onSubmit={iniciarSesion}
            >

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email para Iniciar Sesión"
                  required
                  onChange={leerDatos}
                />
              </div>

              <div className="form-grou mb-5">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password para Iniciar Sesión"
                  required
                  onChange={leerDatos}
                />
              </div>

              <input type="submit" value="Iniciar Sesión" className="btn btn-success btn-block w-100" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login