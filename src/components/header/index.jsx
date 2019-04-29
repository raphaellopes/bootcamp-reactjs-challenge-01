import React from 'react';
import { string } from 'prop-types';

const Header = ({ children, ...props }) => (
  <header {...props}>
    {children}
  </header>
);

Header.propTypes = {
  children: string.isRequired,
};

export default Header;
