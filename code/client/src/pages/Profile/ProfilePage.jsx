import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Container, Card, ListGroup, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";

export default function PersonalPage() {
  const { userId } = useParams();
  const [stats, setStats] = useState({
    userName: "",
    totalGames: 0,
    gamesByCategory: [],
    totalScore: 0,
    maxScore: 0,
    loading: true,
  });
  const categoryIds = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        let totalScore = 0;
        let gamesCount = 0;
        const categoryStats = [];
        let fetchedUserName = ""; // Имя пользователя, полученное из API
        let allDataFound = true;

        for (const categoryId of categoryIds) {
          try {
            const response = await axios.get(
              `/profile/${userId}/${categoryId}`
            );
            if (response.data) {
              totalScore += response.data.score || 0; // Безопасное добавление score
              gamesCount++;
              categoryStats.push({
                categoryId,
                name: response.data.category || `Категория ${categoryId}`, // Безопасное получение category
                score: response.data.score || 0,
              });

              // Сохраняем имя пользователя, если оно еще не установлено
              if (!fetchedUserName && response.data.user) {
                fetchedUserName = response.data.user;
              }
            } else {
              allDataFound = false; // Отмечаем, что данные для одной из категорий не найдены
            }
          } catch (err) {
            console.log(`Нет данных для категории ${categoryId}`);
            allDataFound = false; // Отмечаем, что данные для одной из категорий не найдены
          }
        }

        setStats({
          userName: fetchedUserName || "Пользователь", // Используем полученное имя пользователя или значение по умолчанию
          totalGames: gamesCount,
          gamesByCategory: categoryStats,
          totalScore,
          maxScore: gamesCount * 100,
          loading: false,
        });
      } catch (err) {
        console.log(err);
        setStats((prevState) => ({ ...prevState, loading: false }));
      }
    };

    fetchStats();
  }, [userId, categoryIds]);

  const accuracy =
    stats.totalGames > 0
      ? Math.round((stats.totalScore / stats.maxScore) * 100)
      : 0;

  return (
    <Container className="personal-page-container">
      <Card className="shadow rounded-lg">
        <Card.Header className="bg-primary text-white rounded-top">
          <h2 className="mb-0 text-center">Персональная статистика</h2>
        </Card.Header>
        <Card.Body className="d-flex flex-wrap">
          {/* Основная информация */}
          <Card className="info-card rounded-lg shadow-sm">
            <Card.Body>
              <Card.Title className="profile-card-title">
                Привет, {stats.userName}
              </Card.Title>
              <Card.Text>
                <strong>Всего игр:</strong> {stats.totalGames}
                <br />
                <strong>Общий счет:</strong> {stats.totalScore} /{" "}
                {stats.maxScore}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Точность ответов */}
          <Card className="accuracy-card rounded-lg shadow-sm">
            <Card.Body>
              <Card.Title className="profile-card-title">
                Точность ответов
              </Card.Title>
              <div className="d-flex flex-column align-items-center">
                <span className="accuracy-percentage">{accuracy}%</span>
                <ProgressBar
                  now={accuracy}
                  label={`${accuracy}%`}
                  variant="success"
                  style={{ width: "80%" }}
                />
              </div>
            </Card.Body>
          </Card>

          {/* Результаты по категориям */}
          <Card className="category-results-card rounded-lg shadow-sm">
            <Card.Body>
              <Card.Title className="category-results-title">
                Результаты по категориям
              </Card.Title>
              <ListGroup variant="flush">
                {stats.gamesByCategory.length > 0 ? (
                  stats.gamesByCategory.map((category, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center category-item"
                    >
                      <span>{category.name}</span>
                      <span className="badge bg-success rounded-pill">
                        {category.score} баллов
                      </span>
                    </ListGroup.Item>
                  ))
                ) : (
                  <p className="text-muted text-center">
                    Нет данных по категориям
                  </p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}
