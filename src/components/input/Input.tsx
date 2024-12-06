import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<IProps> = ({ icon, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      {icon && <p>{icon}</p>}
      <input {...props} />
    </div>
  );
};
