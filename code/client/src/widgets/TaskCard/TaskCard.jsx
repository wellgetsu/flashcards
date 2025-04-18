import React from 'react';
import './TaskCard.css';
import { Link } from 'react-router';

export default function TaskCard(props) {
  const { task, children } = props;
  return (
    <div className='card'>
      <Link to={`/tasks/${task.id}`}>
        <h3>{task.title}</h3>
      </Link>
      <p>{task.body}</p>
      {children}
    </div>
  );
}
