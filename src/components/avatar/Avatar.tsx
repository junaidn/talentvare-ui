import React from "react";
import styles from "./avatar.module.scss";
import Image from "next/image";

export const Avatar: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      height={38}
      width={38}
      alt="avatar"
      className={styles.avatar}
    />
  );
};
