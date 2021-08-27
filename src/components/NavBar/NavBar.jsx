import React from "react";
import NavBarCSS from "./NavBar.module.css";
import Cart from "./Cart/Cart";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return(
        <nav >
            <div className={NavBarCSS.navFlex}>
                <NavLink to={"/"}>
                    <h1 className={NavBarCSS.logo}>{props.nombreDeLaTienda}</h1>
                </NavLink>
                <ul className={NavBarCSS.navFlex}>
                    <li >
                        Plantas</li>
                    <li >Flores</li>
                    <li >Arboles</li>
                    <NavLink to={"/cart"}>
                        <Cart/>
                    </NavLink >
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;