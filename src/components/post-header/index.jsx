import React from 'react';
import { string } from 'prop-types';

import styles from './styles.scss';

const PostHeader = ({
  authorName, authorAvatar, postTime, ...props
}) => (
  <header className={`post-header ${styles.main}`} {...props}>
    {authorAvatar && (
      <div className={styles.wrapAvatar}>
        <img
          className={styles.avatar}
          src={authorAvatar}
          alt={`Avatar de ${authorName}`}
        />
      </div>
    )}
    <div className={styles.info}>
      <h2 className={styles.title}>{ authorName }</h2>
      <small className="subtitle">{ postTime }</small>
    </div>
  </header>
);

PostHeader.propTypes = {
  authorName: string.isRequired,
  authorAvatar: string,
  postTime: string.isRequired,
};

PostHeader.defaultProps = {
  authorAvatar: '',
};

export default PostHeader;
