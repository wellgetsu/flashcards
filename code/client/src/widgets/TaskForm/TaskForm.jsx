import React, { useState } from 'react';
import './TaskForm.css';

export default function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();

    if (
      !body ||
      body.trim().length === 0 ||
      !title ||
      title.trim().length === 0
    ) {
      return;
    }

    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode !== 201) return;
        setTasks([...tasks, result.data]);
        setTitle('');
        setBody('');
      });
  }

  return (
    <form onSubmit={onSubmitHandler} className='form'>
      <input
        placeholder='title'
        name='title'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className='input'
      />
      <input
        placeholder='body'
        name='body'
        className='input'
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button type='submit' className='form__button'>
        create
      </button>
    </form>
  );
}
