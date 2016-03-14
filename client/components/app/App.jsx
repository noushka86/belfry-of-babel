import React from 'react';
import ChatBoard from '/client/components/chat/ChatBoard.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChatBoard />
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
