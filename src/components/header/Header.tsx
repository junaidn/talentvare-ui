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
import { SideMenu } from "../side-menu/SideMenu";
import LOCALES from "@/constans/locales";

export const Header = () => {
  return (
    <header className={styles.header}>
      <SideMenu />
      <div className={styles.container}>
        <Image src={appLogo} height={41} width={39} alt="app-logo" />
        <div className={styles.leftSection}>
          <p>{LOCALES.HEADER.FIND_JOBS}</p>
          <LinkButton href="#" label={LOCALES.HEADER.TOP_COMPANIES} />
          <LinkButton href="#" label={LOCALES.HEADER.JOB_TRACKER} />
          <LinkButton href="#" label={LOCALES.HEADER.MY_CALENDAR} />
          <LinkButton href="#" label={LOCALES.HEADER.DOCUMENTS} />
          <LinkButton href="#" label={LOCALES.HEADER.MESSAGES} />
          <LinkButton href="#" label={LOCALES.HEADER.NOTIFICATION} />
        </div>
        <div className={styles.rightSection}>
          <Input
            placeholder={LOCALES.GENERIC.SEARCH}
            icon={<SearchIcon fill="#737A91" />}
          />
          <Button label={LOCALES.GENERIC.RESUME_BUILDER} onClick={() => {}} />
          <Avatar src={profile} height={38} width={38} alt="me-profile" />
        </div>
      </div>
    </header>
  );
};
