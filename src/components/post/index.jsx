import React from 'react';
import { shape, string } from 'prop-types';

const Post = ({ data, ...props }) => (
  <li {...props}>
    <p>{data.text}</p>
  </li>
);

Post.propTypes = {
  data: shape({
    text: string.isRequired,
    author: shape({
      name: string.isRequired,
      avatar: string,
    }),
  }).isRequired,
};

export default Post;
