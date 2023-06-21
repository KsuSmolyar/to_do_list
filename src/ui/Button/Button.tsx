import React, {ButtonHTMLAttributes } from "react";
import styles from './button.module.css'
import classNames from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  buttonClassName?: string;
}
export const Button = ({buttonClassName, variant='primary', children, ...props}: IButton) => {
  return (
    <button  className={classNames(styles.btn, buttonClassName, {
      [styles.primaryBtn]: variant === 'primary',
      [styles.secondaryBtn]: variant === 'secondary'
    })} {...props}>{children}</button>
  )
}
