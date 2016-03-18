import React from 'react';
class Login extends React.Component {


  handleClick() {
    const { store } = this.context;
    store.dispatch({ type: 'SET_VISIBLE_COMPONENT', component: 'ChatBoardContainer' });
    console.log(store.getState());
  }

  render() {
    return (
      <div>
        HELLO
        <button onClick={(this.handleClick).bind(this)}>Click ME</button>
      </div>
    );
  }
}

Login.contextTypes = {
  store: React.PropTypes.object,
};

Login.displayName = 'Login';
export default Login;
