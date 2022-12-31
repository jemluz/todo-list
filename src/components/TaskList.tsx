import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from '../styles/TaskList.module.css'

export function TaskList() {
  let [isCheck, setIsCheck] = useState(false);

  function handleToogleChecked() {
    setIsCheck(state => {
      return !state
    });
    console.log(isCheck ? 'Marcado' : 'Desmarcado')
  }

  return (
    <div>
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

        <p className={isCheck ? styles.risked : ''}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

        <Trash className={styles.delete_btn} size={24} />
      </div>
    </div>
  )
}