import React from 'react';
class Login extends React.Component {

  handleClick() {
    store.dispatch({ type: 'SET_VISIBLE_COMPONENT', component:'ChatBoardContainer' });
  }

  render() {
    return (
      <div>
        HELLO
        <button onClick={this.handleClick}>Click ME</button>
      </div>
    );
  }
}

Login.displayName = 'Login';
export default Login;
