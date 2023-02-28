import React from 'react';
import { useState } from 'react';

//Libraries import
import { CheckIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updateTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && closeEditMode();
    };
    window.addEventListener('keydown', closeModalIfEscaped);

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updateTaskName });
  };

  return (
    <div
      role='dialog'
      aria-labelledby='editTask'
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className='todo' onSubmit={handleFormSubmit}>
        <div className='wrapper'>
          <input
            type='text'
            id='editTask'
            className='input'
            value={updateTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Update Task'
          />
          <label htmlFor='editTask' className='label'>
            Update Task
          </label>
        </div>
        <button
          className='btn'
          aria-label={`Confirm Update of ${editedTask.name} Task`}
          type='submit'
        >
          <CheckIcon className='icon' />
        </button>
      </form>
    </div>
  );
};
