import React from 'react';
import ChatBoardContainer from '/client/components/chat/ChatBoardContainer.jsx';
import Login from '/client/components/auth/Login.jsx'
import { connect } from 'redux'


  class App extends React.Component {
    componentDidMount() {
      const { store  } = this.context;
      const state = store.getState();
       const mapState = (state) => {
         console.log(state);
       };
    }
  render() {
     const component = this.props.component;
     console.log(this.props)
    return (
      <div>
      {
        this.props.component === "Login" ?
          <Login store={this.context}/>
        :
          <ChatBoardContainer />
      }
        </div>
    );
  }
}
  App.contextTypes = {
  store: React.PropTypes.object,
};


App.displayName = 'App';
export default App;
