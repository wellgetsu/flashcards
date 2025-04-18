import React, { useEffect, useState } from "react";
import "./QnADetailed.css";
import { useParams } from "react-router";

export default function TaskDetailed() {
  const { task_id } = useParams();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/tasks/${task_id}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode !== 200) {
          setIsLoading(false);
          return;
        }
        setTask(result.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, [task_id]);

  if (!task && !isLoading)
    return (
      <div className="page__container">
        <h1>Тема с id {task_id} не найдена</h1>
      </div>
    );

  if (isLoading)
    return (
      <div className="page__container">
        <h1>Загрузка...</h1>
      </div>
    );

  return (
    <div className="page__container">
      <h1>{task.title}</h1>
      <h2>{task.body}</h2>
      <h3>{new Date(task.createdAt).toLocaleString()}</h3>
    </div>
  );
}
