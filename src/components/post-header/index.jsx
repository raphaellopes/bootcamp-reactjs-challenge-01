import React from 'react';
import { string } from 'prop-types';

const PostHeader = ({
  authorName, authorAvatar, postTime, ...props
}) => (
  <header {...props}>
    {authorAvatar && <img src={authorAvatar} alt={`Avatar de ${authorName}`} /> }
    <h2>{ authorName }</h2>
    <small>{ postTime }</small>
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
