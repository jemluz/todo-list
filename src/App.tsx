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
  let [completedTasks, setCompletedTasks] = useState(
    tasks.filter(task => task.isComplete === true)
  );

  function createTask(taskToCreate: TaskModel) {
    setTasks([...tasks, taskToCreate]);
  }

  function toggleCompleteTask(taskToComplete: TaskModel) {
    const tasksWithCompletedOne = tasks.map(task => {
      if (task.name === taskToComplete.name) {
        task.isComplete = !task.isComplete;
      }
      return task;
    })

    setCompletedTasks(
      tasksWithCompletedOne.filter(
        task => task.isComplete === true
      )
    );
  }

  function deleteTask(taskToDelete: TaskModel) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onCreateNewTask={createTask} />
        <TaskCounter totalCount={tasks.length} completedCount={completedTasks.length} />

        {(
          tasks.map(
            task => {
              return <Task key={task.name} task={task} onDeleteTask={deleteTask} onCompleteTask={toggleCompleteTask} />
            }
          )
        )}
      </main>
    </div>
  )
}