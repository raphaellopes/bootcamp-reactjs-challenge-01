// vendors
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// components
import {
  Header,
  PostList,
  Post,
} from './components';

class App extends Component {
  state = {
    posts: [{
      author: {
        name: 'Rasta',
        avatar: 'image',
      },
      date: '2019-04-29',
      text: 'asdasd ad asdas das das dasd asd asd a',
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

render(<App />, document.getElementById('app'));
