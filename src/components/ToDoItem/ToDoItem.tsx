import React from "react";
import styles from './todoitem.module.css';
import { Button } from "../../ui/Button";
import { Trashcan } from "../../ui/icons";

interface IToDoItem {
  taskText: string;
  complete: boolean;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
  id: number;
}
export const ToDoItem = ({taskText, complete, onDelete, onCheck, id}:IToDoItem) => {
  const onDeleteHandler = () => {
    onDelete(id)
  }

  const onCheckHandler = () => {
    onCheck(id)
  }

  return (
    <li className={styles.item}>
      <div className={styles.itemContainer}>
	      <input type="checkbox" className={styles.itemCheckbox} defaultChecked={complete} onClick={onCheckHandler}/>
	      <p className={styles.itemText}>{taskText}</p>
        <Button buttonClassName={styles.btnDelete} variant='secondary' onClick={onDeleteHandler}>
          <Trashcan className={styles.deleteIcon}/>
        </Button>
	    </div>
    </li>
  )
}
