import React from "react";
import styles from "./avatar.module.scss";
import Image, { ImageProps } from "next/image";

export const Avatar: React.FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} className={styles.avatar} />;
};
