import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import style from "./navbar.module.css";
import { Navlink } from "./Navlink";

export const Navbar = () => {
  return (
    <nav className={style.navbarContainer}>
      <h1 className={style.nameEcommerce}>Naribarber</h1>
      <div>
        <Navlink title="Inicio" url="#" />
        <Navlink title="Contacto" url="#" />
        <Navlink title="FAQ" url="#" />
      </div>
      <CartWidget />
    </nav>
  );
};
