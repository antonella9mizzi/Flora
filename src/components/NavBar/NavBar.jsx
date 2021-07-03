import react from "react";
import NavBarCSS from "./NavBar.module.css";

const NavBar = (props) => {
    return(
        <nav className={NavBarCSS.nav}>
            <h1>{props.nombreDeLaTienda}</h1>
            <ul className={NavBarCSS.nav}>
                <li>Our products</li>
                <li>Plantcare</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar;