import React from "react";
import styles from "./stat-card.module.scss";

interface IProps {
  profileVisitors: number;
  resumeViewers: number;
  myJobs: number;
}

export const StatCard: React.FC<IProps> = ({
  profileVisitors,
  resumeViewers,
  myJobs,
}) => {
  return (
    <div className={styles.statCard}>
      <div>
        <p>Profile Visitors</p>
        <p>{profileVisitors}</p>
      </div>
      <hr />
      <div>
        <p>Resume Viewers</p>
        <p>{resumeViewers}</p>
      </div>
      <hr />
      <div>
        <p>My Jobs</p>
        <p>{myJobs}</p>
      </div>
    </div>
  );
};
