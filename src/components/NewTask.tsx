import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import styles from '../styles/NewTask.module.css'


export function NewTask() {
  function addTask() {
    event?.preventDefault();
    console.log('Task adicionada')
  }

  return (
    <form className={styles.new_task_form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit" onClick={addTask}>
        Criar <PlusCircle size={32} />
      </button>
    </form>
  )
}