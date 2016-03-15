import { composeWithTracker } from 'react-komposer';
import ChatBoard from '/client/components/chat/ChatBoard.jsx';

function composer(props, onData) {
  const subscription = Meteor.subscribe('posts');
  if (subscription.ready()) {
    const posts = Posts.find().fetch();
    onData(null, { posts });
  }
}

export default composeWithTracker(composer)(ChatBoard);
