import React from "react";
import { NavLink } from "react-router-dom";
import header from '../../css/Header.css';

function Header() {

  return(
    <header>
      <h1>ARMAGEDDON 2023</h1>
      <p className="header-description">ООО “Команда им. Б. Уиллиса”.<br/> Взрываем астероиды с 1998 года.</p>


    </header>
  )
}

export default Header;