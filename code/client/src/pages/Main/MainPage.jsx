import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./MainPage.css";
import ItemsCard from "../../widgets/ItemsCard/ItemsCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function MainPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/api/topics/");
      const result = await response.json();
      setItems(result.data);
    };
    loadData();
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>CATEGORY</h1>
      </div>
      <Container>
        <Row className="justify-content-center">
          {items.map((item) => (
            <ItemsCard key={item.id} item={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
