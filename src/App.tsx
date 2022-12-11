import  "./global.css";
import  styles  from "./App.module.css";
import { Header } from "./components/Header";
import { TaskCount } from "./components/TaskCount";
import { Task } from "./components/Task";
import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { Input } from "./components/Input";

export function App() {
  const Lista = [
    {id: 1, Task: "Ler um Livro.", status: false},
    {id: 2, Task: "Estudar JS.", status: false},
    {id: 3, Task: "Fazer ADOs.", status: false},
    {id: 4, Task: "Ir a academia.", status: true},
    {id: 5, Task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", status: true},
  ]

  const [TaskList, setTaskList] = useState(Lista)

  function createTask(Task:string){
    console.log(createTask)
  }

  return (
    <div className={styles.mainDiv}>
      <Header/>
      <Input CreateTask={createTask}/>
      <TaskCount />
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
    </div>
  )
}


