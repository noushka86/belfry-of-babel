import { composeWithTracker } from 'react-komposer';
import ChatBoard from '/client/components/chat/ChatBoard.jsx';

function composer(props, onData) {
  const subscription = Meteor.subscribe('posts');
  if (subscription.ready()) {
    const posts = Posts.find().fetch();
    let translatedPosts;
    Meteor.call('translate', posts, (err, success) => {
      if (!err) {
        translatedPosts = success;
        console.log(success)
      }
    });
        onData(null, { translatedPosts });
  }
}

export default composeWithTracker(composer)(ChatBoard);
