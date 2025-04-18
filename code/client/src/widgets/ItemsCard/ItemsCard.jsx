import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";

export default function ItemsCard({ item }) {
  let navigate = useNavigate();
  return (
    <Col xs={12} sm={6} className="mb-4">
      {" "}
      {/* Показываем 2 карточки в строке */}
      <Card
        style={{ cursor: "pointer" }}
        className="h-100"
        data-testid={item.id}
        onClick={() => navigate(`/QnA/${item.id}`)}
      >
        <Card.Img
          style={{
            height: "180px",
            objectFit: "cover",
            padding: "5px",
          }}
          variant="top"
          src={item.image}
        />
        <Card.Body>
          <Card.Title className="text-center">{item.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
