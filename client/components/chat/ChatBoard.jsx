import React from 'react';

class ChatBoard extends React.Component {

  constructor(props) {
    super(props);
    this.submitPost = this.submitPost.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.state = { translateTo: 'en' };
  }

  setLanguage(e) {
    this.state.translateTo = e.target['value'];
    Session.set('translateTo', e.target['value']);
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
    console.log(posts);
    if (posts) {
      return posts.map((post, index) => {
        return (
          <p key={index}>{post.data.text}</p>
        );
      });
    }
    return <div/>;
  }

  renderDropDown() {
    const languages = this.props.languages;

    return (
      <select onChange={this.setLanguage}>
      {languages.map((language, index) => {
        return <option key= {index} value={language.value}>{language.language}</option>;
      })}
      </select>
    );
  }

  render() {
    return (
      <div>
        <div id="chat-board">
        { this.renderPosts(this.props.translatedPosts) }
        </div>
        { this.renderDropDown() }
        <form id="post-form" onSubmit={this.submitPost}>
          <input id="post" type="text"/>
        </form>
      </div>
    );
  }
}

ChatBoard.propTypes = {
  posts: React.PropTypes.array,
  translatedPosts: React.PropTypes.array,
  languages: React.PropTypes.array,
};
ChatBoard.displayName = 'ChatBoard';
export default ChatBoard;
