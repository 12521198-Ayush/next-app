"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './SidebarMenu.module.css';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.change : ''}`}></div>
      </button>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/">
              Home 
            </Link>
          </li>
          <li>
            <Link href="/residents">
              Residents 
            </Link>
          </li>
          <li>
            <Link href="/subscriptions">
            Subscriptions 
            </Link>
          </li>
          <li>
            <Link href="/providers">
            Service Providers 
            </Link>
          </li>
          <li>
            <Link href="/about">
               About 
            </Link>
          </li>
          <li>
            <Link href="/services">
               Services 
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link href="/services">
                   Web Design 
                </Link>
              </li>
              <li>
                <Link href="/services">
                   Web Development 
                </Link>
              </li>
              <li>
                <Link href="/services">
                   SEO 
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">
               Contact 
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
