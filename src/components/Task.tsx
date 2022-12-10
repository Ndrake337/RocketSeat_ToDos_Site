import styles from './Task.module.css'
import {Trash, Circle, Check} from 'phosphor-react'
import { useState } from 'react';

interface iTask{
    task: string;
    status: boolean;
}

export function Task({status, task} : iTask) {
    const [taskStatus, setTaskStatus] = useState(status)
    function changeTaskStatus(){
        if(taskStatus === true){
            setTaskStatus(false)
        }
        else{
            setTaskStatus(true)
        }
    }
    return(
        <div className={styles.TaskContainer}>
            {taskStatus === false ? <Circle className={styles.Todo} onClick={changeTaskStatus}/> : <Check className={styles.Done} onClick={changeTaskStatus}/>}
            <p className={taskStatus === false ? styles.ToBeDone : styles.Completed }>{task}</p>
            <div className={styles.TrashWrapper}><Trash size={14} /></div>
        </div>
    )
}