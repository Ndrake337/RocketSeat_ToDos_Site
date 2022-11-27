import  "./global.css";
import  styles  from "./App.module.css";
import { Header } from "./components/Header";
import { TaskCount } from "./components/TaskCount";


export function App() {

  return (
    <div className={styles.mainDiv}>
      <Header />
      <TaskCount />
    </div>
  )
}


