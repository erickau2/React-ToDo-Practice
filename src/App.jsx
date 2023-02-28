import { useState } from 'react';
import reactLogo from './assets/react.svg';

//Custom Components
import { CustomForm } from './components/CustomForm';
import { EditForm } from './components/EditForm';
import { TaskList } from './components/TaskList';

//custome hooks
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage('react-toDo-tasks', []);
  const [editedTask, setEditedTask] = useState([]);
  const [isEditing, setisEditing] = useState(false);
  const [previousFoucusEl, setPreviousFoucusEl] = useState(null);

  const addTask = (task) => {
    setTasks((prevSate) => [...prevSate, task]);
    // console.log(task);
  };

  const deleteTask = (id) => {
    setTasks((prevSate) => prevSate.filter((task) => task.id !== id));
  };

  const toogleTask = (id) => {
    setTasks((prevSate) =>
      prevSate.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const updateTask = (task) => {
    setTasks((prevSate) =>
      prevSate.map((t) => (t.id === task.id ? { ...task, name: task.name } : t))
    );
    closeEditMode();
  };

  //Close the edit mode
  const closeEditMode = () => {
    setisEditing(false);
    previousFoucusEl.focus();
    // previous stae focus
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setisEditing(true);
    setPreviousFoucusEl(document.activeElement);
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          enterEditMode={enterEditMode}
          deleteTask={deleteTask}
          toogleTask={toogleTask}
        />
      )}
    </div>
  );
}

export default App;
