// vendors
import React from 'react';
import { shape, string } from 'prop-types';

// locals
import { PostHeader } from '../index';

// app
const Post = ({ data, ...props }) => (
  <li {...props}>
    <PostHeader
      authorName={data.author.name}
      authorAvatar={data.author.avatar}
      postTime={data.date}
    />
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
