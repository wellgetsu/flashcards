import React, { useEffect, useState } from 'react';
import './TaskList.css';
import TaskCard from '../TaskCard/TaskCard';
import TaskForm from '../TaskForm/TaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(3);

  async function deleteTaskHandler(id) {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.statusCode !== 200) return;

      setTasks((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function getServerDataHandler() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/tasks');
      const result = await response.json();

      if (result.statusCode !== 200) return;
      setTasks(result.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log('Компонент смонтирован');

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    const dataTimeout = setTimeout(getServerDataHandler, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(dataTimeout);
      console.log('Компонент размонтирован');
    };
  }, []);

  return (
    <div className='list'>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <div className='tasksContainer'>
        {!isLoading && count !== 0 && (
          <h2 style={{ color: 'green' }}>Данные придут через {count}</h2>
        )}
        {isLoading && <h1 style={{ color: 'black' }}>Загрузка...</h1>}
        {tasks.length === 0 && <h2 style={{ color: 'black' }}>нет задач</h2>}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task}>
              <button
                type='button'
                onClick={() => deleteTaskHandler(task.id)}
                className='taskCard__delete-button'
              >
                Удалить
              </button>
            </TaskCard>
          ))}
      </div>
    </div>
  );
}
