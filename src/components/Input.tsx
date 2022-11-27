import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

export function Input() {
    return(
        <form className={styles.InputWrapper}>
            <textarea className={styles.FormText} placeholder='Adicione uma nova tarefa' required/>
            <button type="submit">Criar <PlusCircle size={16}/> </button>
        </form>
    )
}