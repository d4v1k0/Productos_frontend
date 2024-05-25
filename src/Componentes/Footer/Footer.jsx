

const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto ">
            <a href="https://www.facebook.com/CapacitacionLIVE" target="_blank" className="text-white me-3">
              <i className="fab fa-facebook fa-lg"></i> Facebook
            </a>
            <a href="https://t.me/+WGsn-McKrvVm7EK6" target="_blank" className="text-white me-3">
              <i className="fab fa-telegram fa-lg"></i> Telegram
            </a>
            <a href="#" target="_blank" className="text-white">
              <i className="fab fa-instagram fa-lg"></i> Instagram
            </a>
            <a href="#" target="_blank" className="text-white">
              <i className="fab fa-square-whatsapp fa-lg"></i> Whatsapp
            </a>
          </div>
          <div className="col-auto">
            <p className="m-0">NUEVA GENERACIÓN - 2024 - Licencia MIT</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer