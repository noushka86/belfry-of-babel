import React from 'react';

export default React.createClass({

  getInitialState() {
    return({
      post:null,
    })
  },

  submitPost(e) {
    e.preventDefault();
  },

  writePost(e) {
  },

  render() {
    return (
      <div>
        <div  id="chat-board">
        </div>
        <form onSubmit={this.submitPost}>
          <input id="post" onChange={this.writePost}  type="text"/>
        </form>
      </div>
    )
  },
})
