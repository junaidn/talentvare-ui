import React, { Fragment, useState } from "react";
import styles from "./side-menu.module.scss";
import { Input } from "../input/Input";
import { SearchIcon } from "../svg-icons";
import { Avatar } from "../avatar/Avatar";
import { profile } from "@/constans/images";
import { LinkButton } from "../link-button/LinkButton";
import { Button } from "../button/Button";

export const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className={styles.sideMenuHeader}>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.searchSection}>
          <Input placeholder="Search" icon={<SearchIcon fill="#737A91" />} />
          <Avatar imageUrl={profile} />
        </div>
      </div>

      <nav className={`${styles.sideMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.closeButton} onClick={() => setMenuOpen(false)}>
          ✕
        </div>
        <p>Find Jobs</p>
        <LinkButton href="#" label="Top Companies" />
        <LinkButton href="#" label="Job Tracker" />
        <LinkButton href="#" label="My Calendar" />
        <LinkButton href="#" label="Documents" />
        <LinkButton href="#" label="Messages" />
        <LinkButton href="#" label="Notification" />
        <Button label="Resume Builder" onClick={() => {}} />
      </nav>
    </Fragment>
  );
};
