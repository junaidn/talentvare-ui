import Link, { LinkProps } from "next/link";
import React from "react";
import styles from "./link-button.module.scss";

interface IProps extends LinkProps {
  label: string;
}

export const LinkButton: React.FC<IProps> = ({ label, ...props }) => {
  return (
    <Link className={styles.linkButton} {...props}>
      {label}
    </Link>
  );
};
