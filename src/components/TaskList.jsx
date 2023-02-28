import React from "react";
//Components import
import TaskItem from "./TaskItem";
//Styles import
import styles from "./TaskList.module.css";

export const TaskList = ({ enterEditMode, tasks, deleteTask, toogleTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            toogleTask={toogleTask}
            key={task.id}
            task={task}
            enterEditMode={enterEditMode}
            deleteTask={deleteTask}
          />
        ))}
    </ul>
  );
};
