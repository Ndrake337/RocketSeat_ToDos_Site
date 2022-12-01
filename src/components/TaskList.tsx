import styles from './TaskList.module.css'
import clipboard from '../assets/Clipboard.svg'
import {Task} from './Task'

export function TaskList() {
    //const emptyTaskList = []
    const TaskList = [
        {id: 1, Task: "Ler um Livro.", status: false},
        {id: 2, Task: "Estudar JS.", status: false},
        {id: 3, Task: "Fazer ADOs.", status: false},
        {id: 4, Task: "Ir a academia.", status: true},
        {id: 5, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: true},
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
            {TaskList.map(task => {
                return(<Task 
                    key={task.id}
                    task={task.Task}
                    status={task.status}
                />)
            })}
        </div>
    )
}