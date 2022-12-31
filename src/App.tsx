import { useState } from 'react';
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task';
import { TaskCounter } from './components/TaskCounter';
import { TaskModel } from './interfaces/Task.interfaces';
import styles from './styles/App.module.css'
import './styles/index.css'
import { tasksMock } from './tasks.mock';

export function App() {
  let [tasks, setTasks] = useState(tasksMock);

  function deleteTask(taskToDelete: TaskModel) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function createTask(taskToCreate: TaskModel) {
    setTasks([...tasks, taskToCreate]);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onCreateNewTask={createTask} />
        <TaskCounter />

        {(
          tasks.map(
            task => {
              return <Task key={task.name} task={task} onDeleteTask={deleteTask} />
            }
          )
        )}
      </main>
    </div>
  )
}