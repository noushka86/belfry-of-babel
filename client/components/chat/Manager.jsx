import React from 'react';
import { Provider } from 'react-redux';
import App from '/client/components/app/App.jsx';
import { createStore } from 'redux';
import chatApp from '/client/reducer/reducer.jsx';

  const store = createStore(chatApp);

class Manager extends React.Component {

  componentDidMount() {
    store.dispatch({ type: 'SET_VISIBLE_COMPONENT', component: 'Login' });
  }

  renderComponent() {
    return store.getState();
  }

  render() {
    return (
      <Provider store={store}>
        <App component={ this.renderComponent()}/>
      </Provider>
    );
  }
}


Manager.displayName = 'Manager';
export default Manager;
