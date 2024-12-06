"use client";

import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { appLogo, profile } from "@/constans/images";
import { LinkButton } from "../link-button/LinkButton";
import { Input } from "../input/Input";
import { SearchIcon } from "../svg-icons";
import { Button } from "../button/Button";
import { Avatar } from "../avatar/Avatar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src={appLogo} height={41} width={39} alt="app-logo" />
        <div className={styles.leftSection}>
          <p>Find Jobs</p>
          <LinkButton href="#" label="Top Companies" />
          <LinkButton href="#" label="Job Tracker" />
          <LinkButton href="#" label="My Calendar" />
          <LinkButton href="#" label="Documents" />
          <LinkButton href="#" label="Messages" />
          <LinkButton href="#" label="Notification" />
        </div>
        <div className={styles.rightSection}>
          <Input placeholder="Search" icon={<SearchIcon fill="#737A91" />} />
          <Button label="Resume Builder" onClick={() => {}} />
          <Avatar imageUrl={profile} />
        </div>
      </div>
    </header>
  );
};
