import React from "react";
import styles from "./job-card.module.scss";
import Image from "next/image";
import { clock, location, save } from "@/constans/images";
import { Button } from "../button/Button";

export interface JobPosting {
  companyImage: string;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  postingTime: string;
  noOfApplicants: number;
}

export const JobCard: React.FC<JobPosting> = ({
  companyImage,
  jobTitle,
  companyName,
  jobLocation,
  postingTime,
  noOfApplicants,
}) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.details}>
        <p className={styles.heading}>Promoted</p>
        <div className={styles.title}>
          <div>
            <Image
              src={companyImage}
              height={21}
              width={23}
              alt="company-pic"
            />
          </div>
          <div>
            <p>{jobTitle}</p>
            <p>{companyName}</p>
          </div>
        </div>
        <div className={styles.location}>
          <div>
            <Image src={location} height={12} width={10} alt="location" />
            <p>{jobLocation}</p>
          </div>
          <div>
            <Image src={clock} height={12} width={10} alt="clock" />
            <p>
              {postingTime} | <span>{noOfApplicants} applicants</span>
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
