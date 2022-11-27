import styles from './Task.module.css'
import {Circle, Check} from 'phosphor-react'
import { useState } from 'react';

interface iTask{
    task: string;
    status: boolean;
}

export function Task({status, task} : iTask) {

    return(
        <div className={styles.TaskContainer}>
            {status === false ? <Circle className={styles.Todo}/> : <Check className={styles.Done}/>}
            <p className={status === false ? styles.ToBeDone : styles.Completed }>{task}</p>
        </div>
    )
}