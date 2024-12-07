import React from "react";
import styles from "./profile-header.module.scss";
import { Avatar } from "../avatar/Avatar";

interface IProps {
  coverImageUrl: string;
  profileImageUrl: string;
  name: string;
  skills: string;
  location: string;
}

export const ProfileHeader: React.FC<IProps> = ({
  coverImageUrl,
  profileImageUrl,
  name,
  skills,
  location,
}) => {
  return (
    <div className={styles.profileHeader}>
      <div
        className={styles.coverPhoto}
        style={{
          backgroundImage: `url(${coverImageUrl})`,
        }}
      >
        <Avatar
          src={profileImageUrl}
          height={86}
          width={86}
          alt="user-profile"
        />
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.name}>{name}</p>
        <div className={styles.skils}>
          <p title={skills}>{skills}</p>
        </div>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};
