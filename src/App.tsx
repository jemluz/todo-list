import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskCounter } from './components/TaskCounter';
import { TaskList } from './components/TaskList';
import styles from './styles/App.module.css'
import './styles/index.css'

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <TaskCounter />
        <TaskList />
      </main>
    </div>
  )
}