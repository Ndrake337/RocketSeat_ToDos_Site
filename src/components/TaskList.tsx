import styles from './TaskList.module.css'
import clipboard from '../assets/Clipboard.svg'
import {Task} from './Task'

export function TaskList() {
    const emptyTaskList = []
    const TaskList = [
        {id: 1, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: 0},
        {id: 2, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: 0},
        {id: 3, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: 0},
        {id: 4, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: 1},
        {id: 5, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: 1},
    ]
    
    return(
        <div className={styles.ListContainer}>
            {/* <div className={styles.Empty}>
                <img src={clipboard} alt='' className={styles.Clipboard}/>
                <div className={styles.textBox}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            </div> */}
            <Task />
        </div>
    )
}