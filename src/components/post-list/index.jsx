import React from 'react';
import { node } from 'prop-types';

import styles from './styles.scss';

const PostList = ({ children, ...props }) => (
  <ul className={`post-list ${styles.main}`} {...props}>
    {children}
  </ul>
);

PostList.propTypes = {
  children: node.isRequired,
};

export default PostList;
