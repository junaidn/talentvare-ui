import React, { useState } from "react";
import styles from "./collapsible.module.scss";
import { arrowDown, teams } from "@/constans/images";
import Image from "next/image";
import { JobPosting } from "../job-card/JobCard";

interface IProps {
  heading: string;
  subHeading: string;
  children: React.ReactNode;
}

export const Collapsible: React.FC<IProps> = ({
  heading,
  subHeading,
  children,
}) => {
  const [showFullHeight, setShowFullHeight] = useState(false);

  return (
    <div
      style={{
        height: showFullHeight ? "300px" : "56px",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
      className={styles.collapsible}
    >
      <div className={styles.header}>
        <div className={styles.heading}>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
        <Image
          src={arrowDown}
          height={10}
          width={16}
          alt="arrow-down"
          onClick={() => setShowFullHeight(!showFullHeight)}
        />
      </div>
      {children}
    </div>
  );
};
