import React from 'react';
import { node } from 'prop-types';

const PostList = ({ children, ...props }) => (
  <ul {...props}>
    {children}
  </ul>
);

PostList.propTypes = {
  children: node.isRequired,
};

export default PostList;
