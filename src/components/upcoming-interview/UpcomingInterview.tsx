import React from "react";
import styles from "./upcoming-interview.module.scss";
import Image from "next/image";
import { JobPosting } from "../job-card/JobCard";

export interface UpcomingInterviewProps
  extends Omit<JobPosting, "postingTime" | "noOfApplicants"> {
  date: string;
  time: string;
}

export const UpcomingInterview: React.FC<UpcomingInterviewProps> = ({
  date,
  time,
  companyImage,
  companyName,
  jobLocation,
  jobTitle,
}) => {
  return (
    <div className={styles.upcomingInterview}>
      <div className={styles.image}>
        <div>
          <Image src={companyImage} height={21} width={23} alt="company-pic" />
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{jobTitle}</p>
        <p className={styles.schedule}>{companyName}</p>
        <p className={styles.schedule}>
          {date} | {time} | {jobLocation}
        </p>
      </div>
      <div className={styles.buttons}>
        <button>Accepted</button>
        <button>Deny</button>
      </div>
    </div>
  );
};
