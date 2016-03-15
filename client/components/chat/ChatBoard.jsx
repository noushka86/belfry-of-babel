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

    Meteor.call('Posts.insertAndTranslate', text, (err) => {
      if (!err) {
        form.reset();
      }
    });
  }


  render() {
    return (
      <div>
        <div id="chat-board">
        {
          this.props.posts.map((post, index) => {
            return (<p key={index}>{post.text}</p>)
          })
        }
        </div>
        <form id="post-form" onSubmit={this.submitPost}>
          <input id="post" type="text"/>
        </form>
      </div>
    );
  }
}

ChatBoard.displayName = 'ChatBoard';
export default ChatBoard;
