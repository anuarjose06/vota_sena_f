import Sidebar from "../../../components/Sidebar/Sidebar"
import { useState } from "react"

import menuBienestar from "../../../components/Sidebar/menus/MenuBienestar"
import Headertop from "../../../components/Header/Header"
import "./registroMasivo.css"

function RegistroMasivo() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen((v) => !v);
    const cerrarMenu = () => setMenuOpen(false)

    return (
        <div className="container-registro-masivo">
            <Sidebar menuOpen={menuOpen} onNavigate={cerrarMenu} links={menuBienestar} />

            <div className="registro-masivo-columna">
                <Headertop
                    menuOpen={menuOpen}
                    toggleMenu={toggleMenu}
                    userName="Consuelo casas"
                    userRole="Bienestar"
                />

                <main className="main-content-registro-masivo">
                    <section className="banner">
                        <h1>Registro Masivo de Aprendices</h1>
                        <p>Carga varios aprendices a la vez y asígnales usuarioy contraseña inicial automáticamente.</p>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default RegistroMasivo;