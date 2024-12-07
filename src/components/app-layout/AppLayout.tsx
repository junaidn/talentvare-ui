import React from "react";
import styles from "./app-layout.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<IProps> = ({ children }) => {
  return <div className={styles.appLayout}>{children}</div>;
};
