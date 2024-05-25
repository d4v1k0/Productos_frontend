import Footer from "../Componentes/Footer/Footer"
import { Link } from "react-router-dom";
import './Css/iniciarSesion.css'

const IniciarSession = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    var correo = document.getElementById("correoLogin").value;
    var contrasena = document.getElementById("contrasenaLogin").value;

    // Obtiene el objeto de usuario almacenado en el almacenamiento local
    var usuarioAlmacenado = JSON.parse(localStorage.getItem("usuario"));

    if ("admin@admin" === correo && "admin" === contrasena) {
      window.location.href = "/admin";
      return;
    }

    // Verifica las credenciales
    if (
      usuarioAlmacenado &&
      usuarioAlmacenado.correo === correo &&
      usuarioAlmacenado.contrasena === contrasena
    ) {
      alert("Inicio de sesión exitoso. Redirigiendo al panel de control.");

      // Redirige al usuario al panel de control después de 2 segundos
      setTimeout(function () {
        window.location.href = "/infor-productos";
      }, 1000);
    } else {
      alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
  };


  return (
    <>
      <section className='body d-flex'>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card w-75 mx-auto">
                <div className="card-header">Iniciar Sesión</div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="correoLogin" className="form-label text-white">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="correoLogin"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contrasenaLogin" className="form-label text-white">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="contrasenaLogin"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesión
                    </button>

                    <p className="mt-3 text-white">
                      ¿No tienes una cuenta?{" "}
                      <Link className="link" to="/registrar">Registrate Aqui.</Link>

                    </p>
                    <p className="fs-9 text-white">
                      Para ingresar al Panel de Administracion <br />
                      precione <Link className="link" to='/login-admin'>Aqui</Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default IniciarSession