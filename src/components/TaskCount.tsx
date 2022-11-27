import styles from './TaskCount.module.css'

export function TaskCount() {
    return(
        <div className={styles.TaskContainer}>
            <div className={styles.TaskStatus}>
                <strong className={styles.created}>Tarefas Criadas <span>0</span></strong>
                <strong className={styles.done}>Concluídas <span>0</span></strong>
            </div>
        </div>
    )
}