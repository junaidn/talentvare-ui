import React from "react";
import styles from "./button.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({ icon, label, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {icon && <p>{icon}</p>}
      <p>{label}</p>
    </button>
  );
};
