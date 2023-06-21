import React from "react";
import styles from './todolist.module.css';
import { ToDoItem } from "../ToDoItem";
import { Task } from "../../types/task";

interface IToDoList {
  tasks: Task[];
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
}
export const ToDoList = ({tasks, onDelete, onCheck}: IToDoList) => {
  return (
      <div  className={styles.tasksContainer}>
        <ul className={styles.toDoList}>
          {tasks.map((task) => (
             <ToDoItem onDelete={onDelete} onCheck={onCheck} id={task.id} key={task.id} taskText={task.title} complete={task.complete}/>
          ))}
       
        </ul>
      </div>
  )
}
