// vendor
import React from 'react';
import { string } from 'prop-types';

// locals
import './styles.scss';

const Header = ({ children }) => (
  <header className="post-header">
    {children}
  </header>
);

Header.propTypes = {
  children: string.isRequired,
};

export default Header;
