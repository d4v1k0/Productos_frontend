import { useContext } from "react"
import Carrusel from "../Componentes/Carrusel/Carrusel"
import Direccion from "../Componentes/Direccion/Direccion"
import Footer from "../Componentes/Footer/Footer"
import Header from "../Componentes/Header/Header"
import Menubar from "../Componentes/MenuBar/Menubar"
import Nosotros from "../Componentes/Nosotros/Nosotros"
import Testimonios from "../Componentes/Testimonios/Testimonios"

import { NgContext, NgProvider } from "../Context/NgContext"


const Inicio = () => {

  const [auth, setAuth] = useContext(NgContext)
  return (
    <>
      <NgProvider value={[auth, setAuth]}>
        <Menubar />
        <Header />
        <Nosotros />
        <Carrusel />
        <Testimonios />
        <Direccion />
        <Footer />
      </NgProvider>
    </>

  )
}

export default Inicio