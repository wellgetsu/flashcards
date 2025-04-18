import React from "react";
import { Link, useNavigate } from "react-router";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <p onClick={() => navigate("/")}>Главная</p>
      <Link to="/profile">Профиль</Link>
      <Link to="/QnA">QnA</Link>
    </footer>
  );
}
