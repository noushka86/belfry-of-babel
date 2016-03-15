import React from 'react';
import ChatBoardContainer from '/client/components/chat/ChatBoardContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChatBoardContainer />
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
