import Footer from "../Componentes/Footer/Footer"
import './Css/Registro.css'

const Registro = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    var usuario = {
      nombre: nombre,
      correo: correo,
      contrasena: contrasena
    };

    // Almacena el objeto de usuario en el almacenamiento local
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Registro exitoso. Redirigiendo al inicio de sesión.');

    // Redirige a la página de inicio de sesión después de 1 segundos
    setTimeout(function () {
      window.location.href = '/iniciar-sesion';
    }, 1000);
  };


  return (
    <>
      <section className='body-registro d-flex align-items-center'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card w-75 mx-auto">
                <div className="card-header">
                  Registro
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label text-white">Nombre</label>
                      <input type="text" className="form-control" id="nombre" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="correo" className="form-label text-white">Correo electrónico</label>
                      <input type="email" className="form-control" id="correo" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contrasena" className="form-label text-white">Contraseña</label>
                      <input type="password" className="form-control" id="contrasena" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
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

export default Registro