import { useRef } from "react"
import { Link } from "react-router-dom"

import logo from '../../assets/logo.ico'
import nav_dropdown from '../../assets/nav_dropdown.png'
import './MenuBar.css'

const Menubar = () => {



  const menuRef = useRef()

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>CENTRO SERVICIO</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <li><Link to="/" onClick={() => scrollToSection('sec1')}>Inicio</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('sec2')}>Nosotros</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('sec3')}>Productos</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('sec4')}>Testimonios</Link></li>
          <li><Link to="https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/daxen_shopping.apk?v=1698178176764">App</Link></li>

        </ul>

        <div className="nav-login-cart">
          <Link to='/registrar'>
            <button >Register</button>
          </Link>
          <Link to='/iniciar-sesion'>
            <button>Login</button>
          </Link>
        </div>

      </div >
    </>
  )
}

export default Menubar