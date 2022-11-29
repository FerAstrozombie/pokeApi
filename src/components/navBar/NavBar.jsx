import "./styles.css";
import logo from '../../logo.png';
import pikachu from "../../pikachu.gif"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [menu , setMenu] = useState(false);
    const toggleMenu = () =>{
        setMenu(!menu);
    }

    return (
        <div className="menu">
            <img className="pikachu" src={pikachu} alt="" />
            <button onClick={toggleMenu} className="cabeceraBoton">
                <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <nav className={`cabeceraNav ${menu ? "isActive" : ""}`}>
                <ul className="cabeceraLista">
                        <li className="lista"><NavLink className={"lista"} to={"/"}>Inicio</NavLink></li>
                        <li className="lista"><NavLink className={"lista"} to={"pokedex"}>Pokedex</NavLink></li>
                </ul>
            </nav>
            <NavLink to={"/"}>
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
        </div>
    )
}

export default NavBar