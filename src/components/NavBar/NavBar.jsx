import react from "react";
import NavBarCSS from "./NavBar.module.css";
import Cart from "./Cart/Cart";

const NavBar = (props) => {
    return(
        <nav >
            <div className={NavBarCSS.navFlex}>
                <h1>{props.nombreDeLaTienda}</h1>
                <ul className={NavBarCSS.navFlex}>
                    <li>Our products</li>
                    <li>Plantcare</li>
                    <li>Contact Us</li>
                    <Cart></Cart>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;