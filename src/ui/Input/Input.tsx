import React, { InputHTMLAttributes } from "react";
import styles from './input.module.css';
import classNames from "classnames";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  placeholderText?: string;
  inputClassName?: string;
}
export const Input = ({placeholderText, inputClassName, ...props}: IInput) => {
  return (
    <input className={classNames(styles.input, inputClassName)} type="text" placeholder={placeholderText} {...props}/>
  )
}
