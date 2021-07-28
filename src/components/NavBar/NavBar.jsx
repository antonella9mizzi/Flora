import react from "react";
import NavBarCSS from "./NavBar.module.css";
import Cart from "./Cart/Cart";
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav >
            <div className={NavBarCSS.navFlex}>
            <Link to={"/"}>
                <h1>{props.nombreDeLaTienda}</h1>
            </Link>
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