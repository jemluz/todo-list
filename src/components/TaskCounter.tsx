import styles from '../styles/TaskCounter.module.css'

export function TaskCounter() {
  return (
    <header>
      <strong className={styles.all_tasks}>
        Tarefas criadas <span className={styles.count}>5</span>
      </strong>

      <strong className={styles.done_tasks}>
        Concluídas <span className={styles.count}>2 de 5</span>
      </strong>
    </header>
  )
}