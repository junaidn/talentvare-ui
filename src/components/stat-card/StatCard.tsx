import React from "react";
import styles from "./stat-card.module.scss";

interface IProps {}

export const StatCard: React.FC<IProps> = () => {
  return (
    <div className={styles.statCard}>
      <div>
        <p>Profile Visitors</p>
        <p>140</p>
      </div>
      <hr />
      <div>
        <p>Resume Viewers</p>
        <p>20</p>
      </div>
      <hr />
      <div>
        <p>My Jobs</p>
        <p>88</p>
      </div>
    </div>
  );
};
