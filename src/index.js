// vendors
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// components
import {
  Header,
  PostList,
  Post,
} from './components';

import './global.scss';

class App extends Component {
  state = {
    posts: [{
      author: {
        name: 'Rasta',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=ScreamOpen&skinColor=Pale',
      },
      date: '2019-04-29',
      text: 'asdasd ad asdas das das dasd asd asd a',
    }, {
      author: {
        name: 'Other user',
      },
      date: '2019-04-29',
      text: 'asdasd ad asdas das das dasd asd asd aasdasd ad asdas das das dasd asd asd a',
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
