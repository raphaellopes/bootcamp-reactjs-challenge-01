// vendors
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// components
import {
  Header,
  PostList,
  Post,
} from '..';

const getAvatar = avatar => (`https://api.adorable.io/avatars/285/${avatar}.png`);

class App extends Component {
  state = {
    posts: [{
      author: {
        name: 'Raphael Lopes',
        avatar: getAvatar('post@1'),
      },
      date: 'há 3 min',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mollis hendrerit. Ut odio ex, posuere finibus turpis at, suscipit varius est. Etiam convallis augue metus. Suspendisse in tristique ipsum. Praesent pulvinar auctor enim, id placerat metus dictum nec. Vivamus hendrerit semper elit, quis viverra dolor pretium ac. Sed at velit lectus. Nulla pretium eget mauris sit amet feugiat. Nunc id mauris fermentum, dictum nunc eu, dapibus leo. Phasellus sagittis tincidunt metus, eu egestas turpis lacinia eu. Duis sed aliquam erat. Ut nec dolor nisi. Nulla gravida lectus sed purus ultrices suscipit. Ut sollicitudin molestie mauris, ut tincidunt justo venenatis eu.',
    }, {
      author: {
        name: 'Ubiratan Ferras de Almeida Filho',
        avatar: getAvatar('post@2'),
      },
      date: 'há 3 min',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mollis hendrerit. Ut odio ex, posuere finibus turpis at, suscipit varius est. Etiam convallis augue metus. Suspendisse in tristique ipsum. Praesent pulvinar auctor enim, id placerat metus dictum nec. Vivamus hendrerit semper elit, quis viverra dolor pretium ac. Sed at velit lectus. Nulla pretium eget mauris sit amet feugiat. Nunc id mauris fermentum, dictum nunc eu, dapibus leo. Phasellus sagittis tincidunt metus, eu egestas turpis lacinia eu. Duis sed aliquam erat. Ut nec dolor nisi. Nulla gravida lectus sed purus ultrices suscipit. Ut sollicitudin molestie mauris, ut tincidunt justo venenatis eu.',
    }],
  }

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header>RocketBook</Header>
        <PostList>
          {posts.map((post, key) => (
            <Post key={`post-${key + 1}`} data={post} />
          ))}
        </PostList>
      </Fragment>
    );
  }
}

export default App;
