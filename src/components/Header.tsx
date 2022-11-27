import styles from './Header.module.css'
import logo from '../assets/Logo.svg'
import { Input } from "./Input";

export function Header (){
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <a href='#'>
                    <img 
                        src={logo} 
                        alt='' 
                        className={styles.logo}
                    />
                </a>
            </header>
            <Input />
            <div className={styles.TaskContainer}>
                <div className={styles.TaskStatus}>
                    <strong>Tarefas Criadas <span>0</span></strong>
                    <strong>Concluídas <span>0</span></strong>
                </div>
            </div>
        </div>
    )
}
