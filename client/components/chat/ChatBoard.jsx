import React from 'react';

class ChatBoard extends React.Component {

  constructor(props) {
    super(props);
    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(e) {
    e.preventDefault();
    const form = document.getElementById('post-form');
    const postInput = document.getElementById('post');
    const text = postInput.value;

    if (typeof text !== 'string') {
      return 'Error';
    }

    Meteor.call('Posts.insert', text, (err) => {
      if (!err) {
        form.reset();
      }
    });
  }

  renderPosts(posts) {
    console.log(posts)
    if (posts) {
      return posts.map((post, index) => {
        return (
          <p key={index}>{post.text}</p>
        );
      });
    }
    return <div/>;
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div id="chat-board">
        { this.renderPosts(this.props.translatedPosts) }
        </div>
        <form id="post-form" onSubmit={this.submitPost}>
          <input id="post" type="text"/>
        </form>
      </div>
    );
  }
}

ChatBoard.propTypes = {
  posts: React.PropTypes.array,
};
ChatBoard.displayName = 'ChatBoard';
export default ChatBoard;
