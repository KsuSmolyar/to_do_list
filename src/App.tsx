import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import './styles/variables.css';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { ToDoList } from './components/ToDoList';
import { Task } from './types/task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function setToLocalStorage(key: string, arr: Task[]) {
    localStorage.setItem(key, JSON.stringify(arr));
  }
  
  function getFromLocalStorage(key: string) {
    const data = localStorage.getItem(key);
    const dataFromLS = data ? JSON.parse(data) : null;
    return dataFromLS != null ? dataFromLS : [];
  }


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
    const elementsOfForm = event.currentTarget.elements;
    const task = elementsOfForm.namedItem('task');
    const taskText = task && task instanceof HTMLInputElement ? task.value.trim() : '';
    const taskId = Date.now();
    if(!taskText) {
      alert('Поле не может быть пустым');
    } else {
      setTasks((prevTasks) => {
       const currentTasks = [...prevTasks, {id: taskId, complete: false, title: taskText}]
        setToLocalStorage('toDoList', currentTasks);
        return currentTasks;
      } )
    }
    
    event.currentTarget.reset();
  }

  const onDelete = (id: number) => {
    setTasks((prevTasks) => {
      const currentTasks = prevTasks.filter(task => task.id !== id)
      setToLocalStorage('toDoList', currentTasks);
      return currentTasks
    }
      )
  }

  const onCheck = (id:number) => {
    setTasks((prevTasks) => {
      const currentTasks = prevTasks.map((task) => {
        if(task.id === id ) {
          task.complete = true
        }
         return task
      })
      setToLocalStorage('toDoList', currentTasks);
      return currentTasks;
    })
  }

  useEffect(()=> {
    setTasks(getFromLocalStorage('toDoList'));
  },[])

  return (
    <div className={styles.App}>
     <div className={styles.container}>
        <h1 className={styles.mainTitle}>My toDoList</h1>
        <form className={styles.newTask} onSubmit={onSubmit}>
          <Input name="task" placeholderText="Task to be done..." required/>
          <Button type="submit">Add</Button>
        </form>

        <ToDoList onDelete={onDelete} onCheck={onCheck} tasks={tasks}/>
        
      </div>
    </div>
  );
}

export default App;
