import React from 'react';

import styles from './TaskItem.module.css';
//Libraries import
import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const TaskItem = ({ task, deleteTask, toogleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked);
    toogleTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckBoxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckCircleIcon className={styles.icon} />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          className='btn'
          onClick={() => {
            enterEditMode(task);
          }}
          aria-label={`update${task.name} Task`}
        >
          <PencilIcon className={styles.icon} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`delete${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon className={styles.icon} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
