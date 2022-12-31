import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { NewTaskProps, TaskModel } from '../interfaces/Task.interfaces';
import styles from '../styles/NewTask.module.css'

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const emptyTask: TaskModel = { name: '', isComplete: false };

  const [newTask, setNewTask] = useState(emptyTask);
  const isNewTaskEmpty = newTask.name.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault() // previne o redirecionamento para uma nova aba
    onCreateNewTask({ name: newTask.name, isComplete: false });
    setNewTask(emptyTask);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask({ name: event.target.value, isComplete: false });
  }

  return (
    <form className={styles.new_task_form} onSubmit={handleCreateNewTask} >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask.name}
        onChange={handleNewTaskChange}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={32} />
      </button>
    </form>
  )
}