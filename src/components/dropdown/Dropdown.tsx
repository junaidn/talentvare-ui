"use client";

import React, { useState } from "react";
import styles from "./dropdown.module.scss";
import Image from "next/image";
import { arrowDown } from "@/constans/images";

interface IProps {
  options: { value: string; label: string }[];
  placeholder: string;
}

export const Dropdown: React.FC<IProps> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span>{selected || placeholder}</span>
        <Image src={arrowDown} height={5} width={10} alt="arrow-down" />
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
