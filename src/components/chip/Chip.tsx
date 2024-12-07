import React, { useState } from "react";
import styles from "./chip.module.scss";

export const Chip: React.FC<
  {
    label: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, ...props }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={() => setActive(!active)}
      {...props}
    >
      {label}
    </button>
  );
};
