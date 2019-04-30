// vendor
import React from 'react';
import { string } from 'prop-types';

// locals
import styles from './styles.scss';

const Header = ({ children }) => (
  <header className={`post-header ${styles.main}`}>
    <h1 className={styles.title}>
      {children}
    </h1>
  </header>
);

Header.propTypes = {
  children: string.isRequired,
};

export default Header;
