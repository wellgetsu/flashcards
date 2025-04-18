import React from "react";
import "./ResultsPage.css";

export default function ResultsPage() {
  const results = {
    name: 'Илез',
    cardname: 'Мировые столицы',
    correct: 8,
    incorrect: 2,
    total: 10,
    timeSpent: "1:26", 
  };

  const accuracy = Math.round((results.correct / results.total) * 100);

  return (
    <div className="results-container">
      <h1>Результаты игры, {results.name}</h1>
      
      <div className="stats-grid">
      <div className="stat-card theme">
          <h3>Тема игры</h3>
          <p>{results.cardname}</p>
        </div>
        <div className="stat-card correct">
          <h3>Правильно</h3>
          <p>{results.correct}</p>
        </div>
        
        <div className="stat-card incorrect">
          <h3>Неправильно</h3>
          <p>{results.incorrect}</p>
        </div>
        
        <div className="stat-card total">
          <h3>Всего</h3>
          <p>{results.total}</p>
        </div>
        
        <div className="stat-card accuracy">
          <h3>Точность</h3>
          <p>{accuracy}%</p>
        </div>
        
        <div className="stat-card time">
          <h3>Время</h3>
          <p>{results.timeSpent}</p>
        </div>
      </div>
      

      

      <div className="actions">
        <button className="btn-retry">Попробовать снова</button>
        <button className="btn-home">На главную</button>
      </div>
    </div>
  );
}
