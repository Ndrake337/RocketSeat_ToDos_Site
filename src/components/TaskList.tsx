import styles from './TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles.TaskContainer}>
            <div className={styles.TaskStatus}>
                <strong>Tarefas Criadas <span>0</span></strong>
                <strong>Concluídas <span>0</span></strong>
            </div>
        </div>
    )
}