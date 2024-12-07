import React from "react";
import styles from "./stat-card.module.scss";
import { Divider } from "../divider/Divider";
import LOCALES from "@/constans/locales";

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
        <p>{LOCALES.STAT_CARD.PROFILE_VISITORS}</p>
        <p>{profileVisitors}</p>
      </div>
      <Divider />
      <div>
        <p>{LOCALES.STAT_CARD.RESUME_VIEWERS}</p>
        <p>{resumeViewers}</p>
      </div>
      <Divider />
      <div>
        <p>{LOCALES.STAT_CARD.MY_JOBS}</p>
        <p>{myJobs}</p>
      </div>
    </div>
  );
};
