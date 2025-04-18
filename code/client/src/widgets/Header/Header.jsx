import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `header__link ${isActive ? "header__link_active" : ""}`
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `header__link ${isActive ? "header__link_active" : ""}`
        }
      >
        Профиль
      </NavLink>
    </header>
  );
}
