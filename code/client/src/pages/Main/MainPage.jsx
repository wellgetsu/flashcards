import React from "react";
import { useNavigate } from "react-router";
import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-content"></div>
      <div className="tech-logos"></div>
    </div>
  );
}
