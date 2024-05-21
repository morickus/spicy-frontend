import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>Spicy Tales</a>
      </div>
    </div>
  );
};

export default Header;