import styles from './TaskList.module.css'
import clipboard from '../assets/Clipboard.svg'

export function TaskList() {
    return(
        <div className={styles.ListContainer}>
            <img src={clipboard} alt='' className={styles.Clipboard}/>
            <div className={styles.textBox}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}