import styles from './Task.module.css'
import {Circle, Check} from 'phosphor-react'
let status = 0
let Checkbox:any
if (status === 0) {      
    Checkbox = <Circle className={styles.Todo}/>;    
}
else{      
    Checkbox = <Check className={styles.Done}/>;   
}

export function Task() {
    return(
        <div className={styles.TaskContainer}>
            {Checkbox}
            <p className={status === 0 ? styles.ToBeDone : styles.Completed }>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
    )
}