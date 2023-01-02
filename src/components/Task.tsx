import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import { TaskProps } from '../interfaces/Task.interfaces';
import styles from '../styles/Task.module.css'

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  let [isCheck, setIsCheck] = useState(task.isComplete);

  function handleToogleChecked() {
    setIsCheck(state => {
      return !state
    });
    handleCompleteTask();
  }

  function handleCompleteTask() {
    onCompleteTask(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      {(
        isCheck
          ? <CheckCircle
            onClick={handleToogleChecked}
            className={styles.checked_btn}
            size={28}
            weight="duotone"
          />
          : <Circle
            onClick={handleToogleChecked}
            className={styles.check_btn}
            size={28}
            weight="duotone"
          />
      )}

      <p className={isCheck ? styles.risked : ''}>{task.name}</p>

      <Trash className={styles.delete_btn} size={24} onClick={handleDeleteTask} />
    </div>
  )
}