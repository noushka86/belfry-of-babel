import React from 'react';
import ChatBoardContainer from '/client/components/chat/ChatBoardContainer.jsx';
import Login from '/client/components/auth/Login.jsx'
import { connect } from 'redux'
  connect('mapStateToProps')

  class App extends React.Component {
  render() {
     const component = this.props.component;
     console.log(this.props)
    return (
      <div>
      {
        this.props.component === "Login" ?
          <Login />
        :
          <ChatBoardContainer />
      }
        </div>
    );
  }
}

App.displayName = 'App';
export default App;
