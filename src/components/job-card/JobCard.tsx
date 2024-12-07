import React from "react";
import styles from "./job-card.module.scss";
import Image from "next/image";
import { clock, location, save, teams } from "@/constans/images";
import { Button } from "../button/Button";

export const JobCard = () => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.details}>
        <p className={styles.heading}>Promoted</p>
        <div className={styles.title}>
          <div>
            <Image src={teams} height={21} width={23} alt="company-pic" />
          </div>
          <div>
            <p>UI/UX Designer</p>
            <p>Teams</p>
          </div>
        </div>
        <div className={styles.location}>
          <div>
            <Image src={location} height={12} width={10} alt="location" />
            <p>Seattle, USA (Remote)</p>
          </div>
          <div>
            <Image src={clock} height={12} width={10} alt="clock" />
            <p>
              1 day ago | <span>22 applicants</span>
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button label="Apply Now" />
          <Image src={save} height={16} width={12} alt="save" />
        </div>
      </div>
    </div>
  );
};
