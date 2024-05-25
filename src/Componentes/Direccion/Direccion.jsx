

const Direccion = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-uppercase">Dirección</h2>
            <i className="bi bi-geo-alt-fill"></i>
            <p className="text-muted">
              Calle 1ro de Mayo entre Calle Uncia y calle 9 de Abril
            </p>
          </div>
        </div>
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d946.3277790524819!2d-66.58308432648363!3d-18.424178017672567!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1698733842050!5m2!1ses!2sus"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Direccion