import React, { Component } from 'react';
import { render } from 'react-dom';

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
      <p>{posts[0].text}</p>
    );
  }
}

render(<App />, document.getElementById('app'));
