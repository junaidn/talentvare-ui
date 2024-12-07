"use client";

import { ProfileHeader } from "@/components/profile-header/ProfileHeader";
import React from "react";
import styles from "./home.module.scss";
import { coverPhoto, userProfile } from "@/constans/images";
import { StatCard } from "@/components/stat-card/StatCard";
import { Dropdown } from "@/components/dropdown/Dropdown";
import { Button } from "@/components/button/Button";
import { SearchIcon } from "@/components/svg-icons";
import { JobCard } from "@/components/job-card/JobCard";
import { Divider } from "@/components/divider/Divider";
import { Chip } from "@/components/chip/Chip";
import { Collapsible } from "@/components/collapsible/Collapsible";
import { UpcomingInterview } from "@/components/upcoming-interview/UpcomingInterview";
import {
  upcomingInterviews,
  locations,
  jobTypes,
  jobPostings,
} from "@/constans/dummy-data";
import LOCALES from "@/constans/locales";

const Home = () => {
  return (
    <>
      <div className={styles.leftSection}>
        <ProfileHeader
          coverImageUrl={coverPhoto}
          profileImageUrl={userProfile}
          name="Albert Flores"
          skills="Senior Product Designer | UI/UX Designer | Graphic Designer | Web |
            Project Manager"
          location="Clinton, Maryland"
        />
        <StatCard profileVisitors={140} resumeViewers={20} myJobs={88} />
        <Collapsible heading="My calendar" subHeading="Upcoming Interviews">
          {upcomingInterviews.map((interview, i) => (
            <UpcomingInterview key={i} {...interview} />
          ))}
        </Collapsible>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.titleSection}>
          <p>
            {LOCALES.HOME.HEADING} <span>Albert!</span>
          </p>
          <p>{LOCALES.HOME.DESCRIPTION}</p>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.searchInput}>
            <input placeholder={LOCALES.GENERIC.FILTER_INPUT_PLACEHOLDER} />
          </div>
          <div className={styles.locationDropdown}>
            <Dropdown
              options={locations}
              placeholder={LOCALES.GENERIC.SELECT_LOCATION}
            />
          </div>
          <div className={styles.jobTypeDropdown}>
            <Dropdown
              options={jobTypes}
              placeholder={LOCALES.GENERIC.JOB_TYPE}
            />
          </div>
          <div className={styles.searchButton}>
            <Button
              label={LOCALES.GENERIC.SEARCH}
              icon={<SearchIcon fill="#ffffff" />}
            />
          </div>
        </div>
        <div className={styles.similarJobTypesSecton}>
          <p>Similar:</p>
          <Chip label="Frontend" />
          <Chip label="Backend" />
          <Chip label="Graphic Designer" />
        </div>
        <div className={styles.featuredJobsSection}>
          <Divider />
          <div className={styles.featuredJobsTitle}>
            <p>{LOCALES.HOME.FEATURED_JOB}</p>
            <p>{LOCALES.HOME.SEE_FEATURES_JOBS}</p>
          </div>
          <div className={styles.featuredJobsList}>
            {jobPostings.featured.map((featured, i) => (
              <JobCard key={i} {...featured} />
            ))}
          </div>
          <Divider />
          <div className={styles.featuredJobsTitle}>
            <p>{LOCALES.HOME.RECOMMENDED_JOBS}</p>
            <p>{LOCALES.HOME.SEE_RECOMMENDED_JOBS}</p>
          </div>
          <div className={styles.featuredJobsList}>
            {jobPostings.recommended.map((recommended, i) => (
              <JobCard key={i} {...recommended} />
            ))}
          </div>
          <Divider />
          <div className={styles.featuredJobsTitle}>
            <p>{LOCALES.HOME.LATEST_JOBS}</p>
            <p>{LOCALES.HOME.SEE_LATEST_JOBS}</p>
          </div>
          <div className={styles.featuredJobsList}>
            {jobPostings.latest.map((latest, i) => (
              <JobCard key={i} {...latest} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
