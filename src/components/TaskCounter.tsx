import { TaskCounterProps } from '../interfaces/Task.interfaces'
import styles from '../styles/TaskCounter.module.css'

export function TaskCounter({ totalCount, completedCount }: TaskCounterProps) {
  return (
    <header className={styles.counter_bar}>
      <strong className={styles.all_tasks}>
        Tarefas criadas <span className={styles.count}>{totalCount}</span>
      </strong>

      <strong className={styles.done_tasks}>
        Concluídas <span className={styles.count}>{completedCount} de {totalCount}</span>
      </strong>
    </header>
  )
}